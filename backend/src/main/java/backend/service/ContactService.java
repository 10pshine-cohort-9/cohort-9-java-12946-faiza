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
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService {

    private static final Logger log =
            LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;
    private final UserRepository userRepository;

    public ContactService(
            ContactRepository contactRepository,
            UserRepository userRepository) {

        this.contactRepository = contactRepository;
        this.userRepository = userRepository;
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