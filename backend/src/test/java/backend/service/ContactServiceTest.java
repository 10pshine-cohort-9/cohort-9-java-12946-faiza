package backend.service;

import backend.dto.ContactRequest;
import backend.dto.ContactResponse;
import backend.entity.Contact;
import backend.entity.User;
import backend.exception.ResourceNotFoundException;
import backend.exception.UnauthorizedException;
import backend.repository.ContactRepository;
import backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ContactServiceTest {

@Mock
private ContactRepository contactRepository;

@Mock
private UserRepository userRepository;

@InjectMocks
private ContactService contactService;

private User user;
private Contact contact;
private ContactRequest request;

private final String userEmail = "test@example.com";

@BeforeEach
void setUp() {

    user = new User(
            "Test",
            "User",
            userEmail,
            "03001234567",
            "password"
    );

    user.setId(1L);

    request = new ContactRequest();
    request.setFirstName("John");
    request.setLastName("Doe");
    request.setTitle("Developer");
    request.setWorkEmail("john@company.com");
    request.setPersonalEmail("john@gmail.com");
    request.setWorkPhone("02112345678");
    request.setHomePhone("02187654321");
    request.setPersonalPhone("03001234567");

    contact = new Contact();
    contact.setId(10L);
    contact.setFirstName("John");
    contact.setLastName("Doe");
    contact.setTitle("Developer");
    contact.setWorkEmail("john@company.com");
    contact.setPersonalEmail("john@gmail.com");
    contact.setWorkPhone("02112345678");
    contact.setHomePhone("02187654321");
    contact.setPersonalPhone("03001234567");
    contact.setUser(user);
}

@Test
void createContact_shouldCreateAndReturnContact() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.save(any(Contact.class)))
            .thenReturn(contact);

    ContactResponse response =
            contactService.createContact(request, userEmail);

    assertNotNull(response);
    assertEquals(10L, response.getId());
    assertEquals("John", response.getFirstName());
    assertEquals("Doe", response.getLastName());
    assertEquals("Developer", response.getTitle());
    assertEquals("john@company.com", response.getWorkEmail());

    verify(userRepository).findByEmail(userEmail);
    verify(contactRepository).save(any(Contact.class));
}

@Test
void createContact_shouldThrowException_whenUserNotFound() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.empty());

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactService.createContact(request, userEmail)
    );

    verify(contactRepository, never()).save(any(Contact.class));
}

@Test
void getContacts_shouldReturnContactsWithoutSearch() {

    Pageable pageable = PageRequest.of(0, 10);

    Page<Contact> contactPage =
            new PageImpl<>(List.of(contact));

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findByUser(user, pageable))
            .thenReturn(contactPage);

    Page<ContactResponse> response =
            contactService.getContacts(
                    userEmail,
                    null,
                    pageable
            );

    assertNotNull(response);
    assertEquals(1, response.getTotalElements());
    assertEquals("John", response.getContent().get(0).getFirstName());

    verify(contactRepository).findByUser(user, pageable);
}

@Test
void getContacts_shouldSearchByName() {

    Pageable pageable = PageRequest.of(0, 10);

    Page<Contact> contactPage =
            new PageImpl<>(List.of(contact));

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository
            .findByUserAndFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(
                    user,
                    "John",
                    "John",
                    pageable
            ))
            .thenReturn(contactPage);

    Page<ContactResponse> response =
            contactService.getContacts(
                    userEmail,
                    "John",
                    pageable
            );

    assertNotNull(response);
    assertEquals(1, response.getTotalElements());
    assertEquals("John", response.getContent().get(0).getFirstName());

    verify(contactRepository)
            .findByUserAndFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(
                    user,
                    "John",
                    "John",
                    pageable
            );
}

@Test
void getContacts_shouldUseFindByUser_whenSearchIsBlank() {

    Pageable pageable = PageRequest.of(0, 10);

    Page<Contact> contactPage =
            new PageImpl<>(List.of(contact));

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findByUser(user, pageable))
            .thenReturn(contactPage);

    Page<ContactResponse> response =
            contactService.getContacts(
                    userEmail,
                    "   ",
                    pageable
            );

    assertEquals(1, response.getTotalElements());

    verify(contactRepository).findByUser(user, pageable);

    verify(
            contactRepository,
            never()
    ).findByUserAndFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(
            any(),
            anyString(),
            anyString(),
            any()
    );
}

@Test
void getContactById_shouldReturnContact_whenAuthorized() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.of(contact));

    ContactResponse response =
            contactService.getContactById(
                    10L,
                    userEmail
            );

    assertNotNull(response);
    assertEquals(10L, response.getId());
    assertEquals("John", response.getFirstName());

    verify(contactRepository).findById(10L);
}

@Test
void getContactById_shouldThrowException_whenContactNotFound() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.empty());

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactService.getContactById(
                    10L,
                    userEmail
            )
    );
}

@Test
void getContactById_shouldThrowException_whenUnauthorized() {

    User anotherUser = new User();
    anotherUser.setId(2L);

    contact.setUser(anotherUser);

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.of(contact));

    assertThrows(
            UnauthorizedException.class,
            () -> contactService.getContactById(
                    10L,
                    userEmail
            )
    );
}

@Test
void updateContact_shouldUpdateAndReturnContact() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.of(contact));

    when(contactRepository.save(contact))
            .thenReturn(contact);

    request.setFirstName("Updated");
    request.setLastName("Contact");

    ContactResponse response =
            contactService.updateContact(
                    10L,
                    request,
                    userEmail
            );

    assertNotNull(response);
    assertEquals("Updated", response.getFirstName());
    assertEquals("Contact", response.getLastName());

    verify(contactRepository).save(contact);
}

@Test
void updateContact_shouldThrowException_whenContactNotFound() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.empty());

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactService.updateContact(
                    10L,
                    request,
                    userEmail
            )
    );

    verify(contactRepository, never()).save(any(Contact.class));
}

@Test
void updateContact_shouldThrowException_whenUnauthorized() {

    User anotherUser = new User();
    anotherUser.setId(2L);

    contact.setUser(anotherUser);

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.of(contact));

    assertThrows(
            UnauthorizedException.class,
            () -> contactService.updateContact(
                    10L,
                    request,
                    userEmail
            )
    );

    verify(contactRepository, never()).save(any(Contact.class));
}

@Test
void deleteContact_shouldDeleteContact_whenAuthorized() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.of(contact));

    contactService.deleteContact(
            10L,
            userEmail
    );

    verify(contactRepository).delete(contact);
}

@Test
void deleteContact_shouldThrowException_whenContactNotFound() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.empty());

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactService.deleteContact(
                    10L,
                    userEmail
            )
    );

    verify(contactRepository, never())
            .delete(any(Contact.class));
}

@Test
void deleteContact_shouldThrowException_whenUnauthorized() {

    User anotherUser = new User();
    anotherUser.setId(2L);

    contact.setUser(anotherUser);

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.of(user));

    when(contactRepository.findById(10L))
            .thenReturn(Optional.of(contact));

    assertThrows(
            UnauthorizedException.class,
            () -> contactService.deleteContact(
                    10L,
                    userEmail
            )
    );

    verify(contactRepository, never())
            .delete(any(Contact.class));
}

@Test
void updateContact_shouldThrowException_whenUserNotFound() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.empty());

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactService.updateContact(
                    10L,
                    request,
                    userEmail
            )
    );

    verify(contactRepository, never())
            .findById(anyLong());
}

@Test
void deleteContact_shouldThrowException_whenUserNotFound() {

    when(userRepository.findByEmail(userEmail))
            .thenReturn(Optional.empty());

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactService.deleteContact(
                    10L,
                    userEmail
            )
    );

    verify(contactRepository, never())
            .findById(anyLong());
}


}
