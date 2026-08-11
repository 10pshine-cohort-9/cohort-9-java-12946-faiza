package backend.repository;

import backend.entity.Contact;
import backend.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Long> {

    Page<Contact> findByUser(User user, Pageable pageable);

    Page<Contact> findByUserAndFirstNameContainingIgnoreCase(
            User user,
            String firstName,
            Pageable pageable
    );

    Page<Contact> findByUserAndLastNameContainingIgnoreCase(
            User user,
            String lastName,
            Pageable pageable
    );

    Page<Contact> findByUserAndFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(
            User user,
            String firstName,
            String lastName,
            Pageable pageable
    );

    // Export all contacts for the logged-in user
    List<Contact> findByUser(User user);
}