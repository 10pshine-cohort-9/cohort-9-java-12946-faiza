package backend.controller;

import backend.dto.ContactRequest;
import backend.dto.ContactResponse;
import backend.service.ContactService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    private static final Logger log =
            LoggerFactory.getLogger(ContactController.class);

    private static final int MAX_PAGE_SIZE = 100;

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    // Create a new contact
    @PostMapping
    public ResponseEntity<ContactResponse> createContact(
            @Valid @RequestBody ContactRequest request,
            Authentication authentication) {

        log.info("Create contact API request received");

        String userEmail = authentication.getName();

        ContactResponse response =
                contactService.createContact(request, userEmail);

        log.info(
                "Contact created successfully. Contact ID: {}",
                response.getId()
        );

        log.info("Create contact API completed successfully");

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    // Get all contacts with pagination and search
    @GetMapping
    public ResponseEntity<Page<ContactResponse>> getContacts(
            @RequestParam(defaultValue = "") String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication) {

        if (page < 0) {
            throw new IllegalArgumentException(
                    "Page number cannot be negative"
            );
        }

        if (size < 1 || size > MAX_PAGE_SIZE) {
            throw new IllegalArgumentException(
                    "Page size must be between 1 and "
                            + MAX_PAGE_SIZE
            );
        }

        log.info(
                "Get contacts API request received. Page: {}, Size: {}",
                page,
                size
        );

        String userEmail = authentication.getName();

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by("firstName").ascending()
        );

        Page<ContactResponse> contacts =
                contactService.getContacts(
                        userEmail,
                        search,
                        pageable
                );

        log.info("Get contacts API completed successfully");

        return ResponseEntity.ok(contacts);
    }

    // Export all contacts as CSV
   // Export all contacts as CSV
@GetMapping(
        value = "/export",
        produces = "text/csv;charset=UTF-8"
)
public ResponseEntity<String> exportContacts(
        Authentication authentication) {

    log.info("Export contacts API request received");

    String userEmail = authentication.getName();

    List<ContactResponse> contacts =
            contactService.exportContacts(userEmail);

    StringBuilder csv = new StringBuilder();

    csv.append(
            "First Name,Last Name,Title,Work Email,Personal Email,"
                    + "Work Phone,Home Phone,Personal Phone\n"
    );

    for (ContactResponse contact : contacts) {

        csv.append(
                        escapeCsvCell(contact.getFirstName())
                )
                .append(",")
                .append(
                        escapeCsvCell(contact.getLastName())
                )
                .append(",")
                .append(
                        escapeCsvCell(contact.getTitle())
                )
                .append(",")
                .append(
                        escapeCsvCell(contact.getWorkEmail())
                )
                .append(",")
                .append(
                        escapeCsvCell(contact.getPersonalEmail())
                )
                .append(",")
                .append(
                        escapeCsvCell(contact.getWorkPhone())
                )
                .append(",")
                .append(
                        escapeCsvCell(contact.getHomePhone())
                )
                .append(",")
                .append(
                        escapeCsvCell(contact.getPersonalPhone())
                )
                .append("\n");
    }

    log.info(
            "Export contacts API completed successfully. Total contacts: {}",
            contacts.size()
    );

    return ResponseEntity.ok()
            .header(
                    HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=contacts.csv"
            )
            .contentType(
                    MediaType.parseMediaType("text/csv;charset=UTF-8")
            )
            .body(csv.toString());
}
    // Import contacts from CSV
    @PostMapping(
            value = "/import",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Map<String, Object>> importContacts(
            @RequestParam("file") MultipartFile file,
            Authentication authentication) {

        log.info("Import contacts API request received");

        String userEmail = authentication.getName();

        Map<String, Object> result =
                contactService.importContacts(
                        file,
                        userEmail
                );

        log.info(
                "Import contacts API completed successfully. User: {}",
                userEmail
        );

        return ResponseEntity.ok(result);
    }

    // Escape CSV values and prevent spreadsheet formula injection
    private String escapeCsvCell(String value) {

        if (value == null) {
            return "";
        }

        String escaped = value.replace("\"", "\"\"");

        if (escaped.startsWith("=")
                || escaped.startsWith("+")
                || escaped.startsWith("-")
                || escaped.startsWith("@")) {

            escaped = "'" + escaped;
        }

        return "\"" + escaped + "\"";
    }

    // Get contact by ID
    @GetMapping("/{id}")
    public ResponseEntity<ContactResponse> getContactById(
            @PathVariable Long id,
            Authentication authentication) {

        log.info(
                "Get contact by ID API request received. Contact ID: {}",
                id
        );

        String userEmail = authentication.getName();

        ContactResponse response =
                contactService.getContactById(
                        id,
                        userEmail
                );

        log.info(
                "Get contact by ID API completed successfully. Contact ID: {}",
                id
        );

        return ResponseEntity.ok(response);
    }

    // Update contact
    @PutMapping("/{id}")
    public ResponseEntity<ContactResponse> updateContact(
            @PathVariable Long id,
            @Valid @RequestBody ContactRequest request,
            Authentication authentication) {

        log.info(
                "Update contact API request received. Contact ID: {}",
                id
        );

        String userEmail = authentication.getName();

        ContactResponse response =
                contactService.updateContact(
                        id,
                        request,
                        userEmail
                );

        log.info(
                "Update contact API completed successfully. Contact ID: {}",
                id
        );

        return ResponseEntity.ok(response);
    }

    // Delete contact
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContact(
            @PathVariable Long id,
            Authentication authentication) {

        log.info(
                "Delete contact API request received. Contact ID: {}",
                id
        );

        String userEmail = authentication.getName();

        contactService.deleteContact(
                id,
                userEmail
        );

        log.info(
                "Delete contact API completed successfully. Contact ID: {}",
                id
        );

        return ResponseEntity.noContent().build();
    }
}