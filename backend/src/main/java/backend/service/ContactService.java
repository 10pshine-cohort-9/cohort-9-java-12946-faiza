
package backend.service;

import backend.dto.ContactRequest;
import backend.dto.ContactResponse;
import backend.entity.Contact;
import backend.entity.User;
import backend.exception.ResourceNotFoundException;
import backend.exception.UnauthorizedException;
import backend.repository.ContactRepository;
import backend.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ContactService {

    private static final Logger log =
            LoggerFactory.getLogger(ContactService.class);

    private static final int MAX_IMPORT_ROWS = 1000;
    private static final int MAX_CONSECUTIVE_FAILURES = 3;

    private final ContactRepository contactRepository;
    private final UserRepository userRepository;
    private final ContactImportRowService contactImportRowService;

    public ContactService(
            ContactRepository contactRepository,
            UserRepository userRepository,
            ContactImportRowService contactImportRowService) {

        this.contactRepository = contactRepository;
        this.userRepository = userRepository;
        this.contactImportRowService = contactImportRowService;
    }

    @Transactional(readOnly = true)
    public List<ContactResponse> exportContacts(String userEmail) {

        User user = getUserByEmail(userEmail);

        List<Contact> contacts = contactRepository.findByUser(user);

        log.info(
                "Exporting {} contacts for user: {}",
                contacts.size(),
                userEmail
        );

        return contacts.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public ContactResponse createContact(
            ContactRequest request,
            String userEmail) {

        User user = getUserByEmail(userEmail);

        Contact contact = new Contact();

        contact.setFirstName(request.getFirstName());
        contact.setLastName(request.getLastName());
        contact.setTitle(request.getTitle());
        contact.setWorkEmail(request.getWorkEmail());
        contact.setPersonalEmail(request.getPersonalEmail());
        contact.setWorkPhone(request.getWorkPhone());
        contact.setHomePhone(request.getHomePhone());
        contact.setPersonalPhone(request.getPersonalPhone());
        contact.setUser(user);

        Contact savedContact = contactRepository.save(contact);

        log.info(
                "Contact created successfully. Contact ID: {}, User: {}",
                savedContact.getId(),
                userEmail
        );

        return mapToResponse(savedContact);
    }

    @Transactional(readOnly = true)
    public Page<ContactResponse> getContacts(
            String userEmail,
            String search,
            Pageable pageable) {

        User user = getUserByEmail(userEmail);

        Page<Contact> contacts;

        if (search == null || search.trim().isEmpty()) {

            contacts = contactRepository.findByUser(
                    user,
                    pageable
            );

        } else {

            contacts = contactRepository
                    .findByUserAndFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(
                            user,
                            search,
                            search,
                            pageable
                    );
        }

        log.info(
                "Contacts fetched successfully. User: {}, Search: {}",
                userEmail,
                search
        );

        return contacts.map(this::mapToResponse);
    }

    @Transactional(readOnly = true)
    public ContactResponse getContactById(
            Long contactId,
            String userEmail) {

        User user = getUserByEmail(userEmail);

        Contact contact = contactRepository
                .findById(contactId)
                .orElseThrow(() -> {

                    log.warn(
                            "Contact not found. Contact ID: {}, User: {}",
                            contactId,
                            userEmail
                    );

                    return new ResourceNotFoundException(
                            "Contact not found with id: " + contactId
                    );
                });

        if (!contact.getUser().getId().equals(user.getId())) {

            log.warn(
                    "Unauthorized contact access attempt. Contact ID: {}, User: {}",
                    contactId,
                    userEmail
            );

            throw new UnauthorizedException(
                    "You are not authorized to access this contact"
            );
        }

        return mapToResponse(contact);
    }

    @Transactional
    public ContactResponse updateContact(
            Long contactId,
            ContactRequest request,
            String userEmail) {

        User user = getUserByEmail(userEmail);

        Contact contact = contactRepository
                .findById(contactId)
                .orElseThrow(() -> {

                    log.warn(
                            "Contact update failed. Contact not found. ID: {}, User: {}",
                            contactId,
                            userEmail
                    );

                    return new ResourceNotFoundException(
                            "Contact not found with id: " + contactId
                    );
                });

        if (!contact.getUser().getId().equals(user.getId())) {

            log.warn(
                    "Unauthorized contact update attempt. Contact ID: {}, User: {}",
                    contactId,
                    userEmail
            );

            throw new UnauthorizedException(
                    "You are not authorized to update this contact"
            );
        }

        contact.setFirstName(request.getFirstName());
        contact.setLastName(request.getLastName());
        contact.setTitle(request.getTitle());
        contact.setWorkEmail(request.getWorkEmail());
        contact.setPersonalEmail(request.getPersonalEmail());
        contact.setWorkPhone(request.getWorkPhone());
        contact.setHomePhone(request.getHomePhone());
        contact.setPersonalPhone(request.getPersonalPhone());

        Contact updatedContact = contactRepository.save(contact);

        log.info(
                "Contact updated successfully. Contact ID: {}, User: {}",
                contactId,
                userEmail
        );

        return mapToResponse(updatedContact);
    }

    @Transactional
    public void deleteContact(
            Long contactId,
            String userEmail) {

        User user = getUserByEmail(userEmail);

        Contact contact = contactRepository
                .findById(contactId)
                .orElseThrow(() -> {

                    log.warn(
                            "Contact deletion failed. Contact not found. ID: {}, User: {}",
                            contactId,
                            userEmail
                    );

                    return new ResourceNotFoundException(
                            "Contact not found with id: " + contactId
                    );
                });

        if (!contact.getUser().getId().equals(user.getId())) {

            log.warn(
                    "Unauthorized contact deletion attempt. Contact ID: {}, User: {}",
                    contactId,
                    userEmail
            );

            throw new UnauthorizedException(
                    "You are not authorized to delete this contact"
            );
        }

        contactRepository.delete(contact);

        log.info(
                "Contact deleted successfully. Contact ID: {}, User: {}",
                contactId,
                userEmail
        );
    }

    /**
     * Import contacts from CSV for the currently authenticated user.
     *
     * First Name and Last Name are required.
     * All other fields are optional.
     */
    public Map<String, Object> importContacts(
            MultipartFile file,
            String userEmail) {

        User user = getUserByEmail(userEmail);

        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException(
                    "Please select a CSV file to import."
            );
        }

        if (file.getSize() > 5 * 1024 * 1024) {
            throw new IllegalArgumentException(
                    "CSV file size must not exceed 5 MB."
            );
        }

        String originalFilename = file.getOriginalFilename();

        if (originalFilename == null
                || !originalFilename.toLowerCase().endsWith(".csv")) {

            throw new IllegalArgumentException(
                    "Only CSV files are supported."
            );
        }

        int importedCount = 0;
        int skippedCount = 0;
        int consecutiveFailures = 0;

        List<String> errors = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(
                        file.getInputStream(),
                        StandardCharsets.UTF_8))) {

            String headerLine = reader.readLine();

            if (headerLine == null || headerLine.trim().isEmpty()) {
                throw new IllegalArgumentException(
                        "CSV file is empty."
                );
            }

            /*
             * Remove UTF-8 BOM that may be added by Excel
             * or other Windows-based editors.
             */
            if (!headerLine.isEmpty()
                    && headerLine.charAt(0) == '\uFEFF') {

                headerLine = headerLine.substring(1);
            }

            List<String> headers = parseCsvLine(headerLine);

            Map<String, Integer> columnIndexes =
                    buildColumnIndexes(headers);

            validateRequiredHeaders(columnIndexes);

            String line;
            int lineNumber = 1;

            while ((line = reader.readLine()) != null) {

                lineNumber++;

                if (line.trim().isEmpty()) {
                    continue;
                }

                if (importedCount + skippedCount >= MAX_IMPORT_ROWS) {

                    errors.add(
                            "Maximum of "
                                    + MAX_IMPORT_ROWS
                                    + " data rows can be imported."
                    );

                    break;
                }

                try {

                    List<String> values = parseCsvLine(line);

                    String firstName = getCsvValue(
                            values,
                            columnIndexes.get("first name")
                    );

                    String lastName = getCsvValue(
                            values,
                            columnIndexes.get("last name")
                    );

                    if (firstName == null || firstName.isBlank()) {
                        throw new IllegalArgumentException(
                                "First Name is required."
                        );
                    }

                    if (lastName == null || lastName.isBlank()) {
                        throw new IllegalArgumentException(
                                "Last Name is required."
                        );
                    }

                    Contact contact = new Contact();

                    contact.setFirstName(firstName);
                    contact.setLastName(lastName);

                    contact.setTitle(
                            getCsvValue(
                                    values,
                                    columnIndexes.get("title")
                            )
                    );

                    contact.setWorkEmail(
                            getCsvValue(
                                    values,
                                    columnIndexes.get("work email")
                            )
                    );

                    contact.setPersonalEmail(
                            getCsvValue(
                                    values,
                                    columnIndexes.get("personal email")
                            )
                    );

                    contact.setWorkPhone(
                            getCsvValue(
                                    values,
                                    columnIndexes.get("work phone")
                            )
                    );

                    contact.setHomePhone(
                            getCsvValue(
                                    values,
                                    columnIndexes.get("home phone")
                            )
                    );

                    contact.setPersonalPhone(
                            getCsvValue(
                                    values,
                                    columnIndexes.get("personal phone")
                            )
                    );

                    /*
                     * The authenticated user is explicitly assigned.
                     * Therefore the imported contact belongs only
                     * to the currently logged-in user.
                     */
                    contact.setUser(user);

                    /*
                     * Save this row in its own transaction.
                     *
                     * If this row fails, only this row is rolled back.
                     * Other successfully imported rows remain committed.
                     */
                    contactImportRowService.saveContact(contact);

                    importedCount++;

                    /*
                     * A successful row means the infrastructure is
                     * working again, so reset the consecutive failure count.
                     */
                    consecutiveFailures = 0;

                } catch (IllegalArgumentException ex) {

                    skippedCount++;

                    errors.add(
                            "Row "
                                    + lineNumber
                                    + ": "
                                    + ex.getMessage()
                    );

                } catch (Exception ex) {

                    skippedCount++;
                    consecutiveFailures++;

                    log.error(
                            "Unexpected error while importing row {} for user {}",
                            lineNumber,
                            userEmail,
                            ex
                    );

                    errors.add(
                            "Row "
                                    + lineNumber
                                    + ": Unable to import this row."
                    );

                    /*
                     * Repeated unexpected failures usually indicate
                     * an infrastructure/database problem rather than
                     * invalid individual CSV rows.
                     */
                    if (consecutiveFailures
                            >= MAX_CONSECUTIVE_FAILURES) {

                        throw new IllegalStateException(
                                "CSV import aborted after repeated failures.",
                                ex
                        );
                    }
                }
            }

        } catch (IOException ex) {

            log.error(
                    "Failed to read CSV file for user: {}",
                    userEmail,
                    ex
            );

            throw new IllegalArgumentException(
                    "Unable to read the CSV file."
            );
        }

        log.info(
                "CSV import completed. User: {}, Imported: {}, Skipped: {}",
                userEmail,
                importedCount,
                skippedCount
        );

        Map<String, Object> result = new HashMap<>();

        result.put(
                "message",
                "CSV import completed."
        );

        result.put(
                "importedCount",
                importedCount
        );

        result.put(
                "skippedCount",
                skippedCount
        );

        result.put(
                "errors",
                errors.isEmpty()
                        ? Collections.emptyList()
                        : errors
        );

        return result;
    }

    private Map<String, Integer> buildColumnIndexes(
            List<String> headers) {

        Map<String, Integer> indexes = new HashMap<>();

        for (int i = 0; i < headers.size(); i++) {

            String header = headers.get(i)
                    .trim()
                    .toLowerCase();

            indexes.put(header, i);
        }

        return indexes;
    }

    private void validateRequiredHeaders(
            Map<String, Integer> columnIndexes) {

        if (!columnIndexes.containsKey("first name")) {
            throw new IllegalArgumentException(
                    "CSV must contain a 'First Name' column."
            );
        }

        if (!columnIndexes.containsKey("last name")) {
            throw new IllegalArgumentException(
                    "CSV must contain a 'Last Name' column."
            );
        }
    }

    /**
     * Returns null for missing or blank optional values
     * so imported contacts are consistent with contacts
     * created through the normal create-contact flow.
     */
    private String getCsvValue(
            List<String> values,
            Integer index) {

        if (index == null || index >= values.size()) {
            return null;
        }

        String value = values.get(index).trim();

        return value.isEmpty() ? null : value;
    }

    /**
     * Parses a CSV row while supporting:
     * - commas inside quoted values
     * - escaped double quotes
     * - normal unquoted values
     */
    private List<String> parseCsvLine(String line) {

        List<String> values = new ArrayList<>();
        StringBuilder current = new StringBuilder();

        boolean insideQuotes = false;

        for (int i = 0; i < line.length(); i++) {

            char character = line.charAt(i);

            if (character == '"') {

                if (insideQuotes
                        && i + 1 < line.length()
                        && line.charAt(i + 1) == '"') {

                    current.append('"');
                    i++;

                } else {

                    insideQuotes = !insideQuotes;
                }

            } else if (character == ',' && !insideQuotes) {

                values.add(current.toString());
                current.setLength(0);

            } else {

                current.append(character);
            }
        }

        if (insideQuotes) {
            throw new IllegalArgumentException(
                    "Invalid CSV format: unclosed quotation mark."
            );
        }

        values.add(current.toString());

        return values;
    }

    private User getUserByEmail(String email) {

        return userRepository
                .findByEmail(email)
                .orElseThrow(() -> {

                    log.error(
                            "Authenticated user not found. Email: {}",
                            email
                    );

                    return new ResourceNotFoundException(
                            "User not found with email: " + email
                    );
                });
    }

    private ContactResponse mapToResponse(Contact contact) {

        return new ContactResponse(
                contact.getId(),
                contact.getFirstName(),
                contact.getLastName(),
                contact.getTitle(),
                contact.getWorkEmail(),
                contact.getPersonalEmail(),
                contact.getWorkPhone(),
                contact.getHomePhone(),
                contact.getPersonalPhone()
        );
    }
}
