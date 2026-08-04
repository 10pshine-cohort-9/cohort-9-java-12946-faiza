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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

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