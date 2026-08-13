package backend.service;

import backend.entity.Contact;
import backend.repository.ContactRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactImportRowService {

    private final ContactRepository contactRepository;

    public ContactImportRowService(
            ContactRepository contactRepository) {

        this.contactRepository = contactRepository;
    }

    /**
     * Saves one imported contact in its own transaction.
     *
     * If this row fails, only this row is rolled back.
     * Other successfully imported rows remain committed.
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void saveContact(Contact contact) {

        contactRepository.saveAndFlush(contact);
    }
}