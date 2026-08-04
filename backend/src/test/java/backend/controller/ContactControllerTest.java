package backend.controller;

import backend.dto.ContactRequest;
import backend.dto.ContactResponse;
import backend.exception.ResourceNotFoundException;
import backend.exception.UnauthorizedException;
import backend.service.ContactService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ContactControllerTest {

@Mock
private ContactService contactService;

@Mock
private Authentication authentication;

@InjectMocks
private ContactController contactController;

private ContactRequest request;
private ContactResponse response;

private final String userEmail = "test@example.com";

@BeforeEach
void setUp() {

    request = new ContactRequest();

    request.setFirstName("John");
    request.setLastName("Doe");
    request.setTitle("Developer");
    request.setWorkEmail("john@company.com");
    request.setPersonalEmail("john@gmail.com");
    request.setWorkPhone("02112345678");
    request.setHomePhone("02187654321");
    request.setPersonalPhone("03001234567");

    response = new ContactResponse(
            1L,
            "John",
            "Doe",
            "Developer",
            "john@company.com",
            "john@gmail.com",
            "02112345678",
            "02187654321",
            "03001234567"
    );

    when(authentication.getName())
            .thenReturn(userEmail);
}

@Test
void createContact_shouldReturnCreatedResponse() {

    when(contactService.createContact(
            request,
            userEmail
    )).thenReturn(response);

    ResponseEntity<ContactResponse> result =
            contactController.createContact(
                    request,
                    authentication
            );

    assertEquals(
            HttpStatus.CREATED,
            result.getStatusCode()
    );

    assertNotNull(result.getBody());

    assertEquals(
            1L,
            result.getBody().getId()
    );

    assertEquals(
            "John",
            result.getBody().getFirstName()
    );

    assertEquals(
            "Doe",
            result.getBody().getLastName()
    );

    verify(contactService).createContact(
            request,
            userEmail
    );
}

@Test
void getContacts_shouldReturnPaginatedContacts() {

    Page<ContactResponse> page =
            new PageImpl<>(List.of(response));

    when(contactService.getContacts(
            eq(userEmail),
            eq("John"),
            any(Pageable.class)
    )).thenReturn(page);

    ResponseEntity<Page<ContactResponse>> result =
            contactController.getContacts(
                    "John",
                    0,
                    10,
                    authentication
            );

    assertEquals(
            HttpStatus.OK,
            result.getStatusCode()
    );

    assertNotNull(result.getBody());

    assertEquals(
            1,
            result.getBody().getTotalElements()
    );

    assertEquals(
            "John",
            result.getBody()
                    .getContent()
                    .get(0)
                    .getFirstName()
    );

    verify(contactService).getContacts(
            eq(userEmail),
            eq("John"),
            any(Pageable.class)
    );
}

@Test
void getContacts_shouldUseDefaultSearchAndPaginationValues() {

    Page<ContactResponse> page =
            new PageImpl<>(List.of(response));

    when(contactService.getContacts(
            eq(userEmail),
            eq(""),
            any(Pageable.class)
    )).thenReturn(page);

    ResponseEntity<Page<ContactResponse>> result =
            contactController.getContacts(
                    "",
                    0,
                    10,
                    authentication
            );

    assertEquals(
            HttpStatus.OK,
            result.getStatusCode()
    );

    assertNotNull(result.getBody());

    verify(contactService).getContacts(
            eq(userEmail),
            eq(""),
            any(Pageable.class)
    );
}

@Test
void getContactById_shouldReturnContact() {

    when(contactService.getContactById(
            1L,
            userEmail
    )).thenReturn(response);

    ResponseEntity<ContactResponse> result =
            contactController.getContactById(
                    1L,
                    authentication
            );

    assertEquals(
            HttpStatus.OK,
            result.getStatusCode()
    );

    assertNotNull(result.getBody());

    assertEquals(
            1L,
            result.getBody().getId()
    );

    assertEquals(
            "John",
            result.getBody().getFirstName()
    );

    verify(contactService).getContactById(
            1L,
            userEmail
    );
}

@Test
void updateContact_shouldReturnUpdatedContact() {

    request.setFirstName("Updated");

    ContactResponse updatedResponse =
            new ContactResponse(
                    1L,
                    "Updated",
                    "Doe",
                    "Senior Developer",
                    "updated@company.com",
                    "updated@gmail.com",
                    "02111111111",
                    "02122222222",
                    "03001111111"
            );

    when(contactService.updateContact(
            1L,
            request,
            userEmail
    )).thenReturn(updatedResponse);

    ResponseEntity<ContactResponse> result =
            contactController.updateContact(
                    1L,
                    request,
                    authentication
            );

    assertEquals(
            HttpStatus.OK,
            result.getStatusCode()
    );

    assertNotNull(result.getBody());

    assertEquals(
            "Updated",
            result.getBody().getFirstName()
    );

    assertEquals(
            "Senior Developer",
            result.getBody().getTitle()
    );

    verify(contactService).updateContact(
            1L,
            request,
            userEmail
    );
}

@Test
void deleteContact_shouldReturnNoContent() {

    doNothing().when(contactService)
            .deleteContact(
                    1L,
                    userEmail
            );

    ResponseEntity<Void> result =
            contactController.deleteContact(
                    1L,
                    authentication
            );

    assertEquals(
            HttpStatus.NO_CONTENT,
            result.getStatusCode()
    );

    assertNull(result.getBody());

    verify(contactService).deleteContact(
            1L,
            userEmail
    );
}

@Test
void createContact_shouldPropagateResourceNotFoundException() {

    when(contactService.createContact(
            request,
            userEmail
    )).thenThrow(
            new ResourceNotFoundException(
                    "User not found"
            )
    );

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactController.createContact(
                    request,
                    authentication
            )
    );

    verify(contactService).createContact(
            request,
            userEmail
    );
}

@Test
void getContactById_shouldPropagateResourceNotFoundException() {

    when(contactService.getContactById(
            1L,
            userEmail
    )).thenThrow(
            new ResourceNotFoundException(
                    "Contact not found"
            )
    );

    assertThrows(
            ResourceNotFoundException.class,
            () -> contactController.getContactById(
                    1L,
                    authentication
            )
    );

    verify(contactService).getContactById(
            1L,
            userEmail
    );
}

@Test
void getContactById_shouldPropagateUnauthorizedException() {

    when(contactService.getContactById(
            1L,
            userEmail
    )).thenThrow(
            new UnauthorizedException(
                    "Not authorized"
            )
    );

    assertThrows(
            UnauthorizedException.class,
            () -> contactController.getContactById(
                    1L,
                    authentication
            )
    );

    verify(contactService).getContactById(
            1L,
            userEmail
    );
}

@Test
void updateContact_shouldPropagateUnauthorizedException() {

    when(contactService.updateContact(
            1L,
            request,
            userEmail
    )).thenThrow(
            new UnauthorizedException(
                    "Not authorized"
            )
    );

    assertThrows(
            UnauthorizedException.class,
            () -> contactController.updateContact(
                    1L,
                    request,
                    authentication
            )
    );

    verify(contactService).updateContact(
            1L,
            request,
            userEmail
    );
}

@Test
void deleteContact_shouldPropagateUnauthorizedException() {

    doThrow(
            new UnauthorizedException(
                    "Not authorized"
            )
    ).when(contactService).deleteContact(
            1L,
            userEmail
    );

    assertThrows(
            UnauthorizedException.class,
            () -> contactController.deleteContact(
                    1L,
                    authentication
            )
    );

    verify(contactService).deleteContact(
            1L,
            userEmail
    );
}


}
