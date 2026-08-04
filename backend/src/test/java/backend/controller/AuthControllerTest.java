package backend.controller;

import backend.dto.AuthResponse;
import backend.dto.ChangePasswordRequest;
import backend.dto.LoginRequest;
import backend.dto.RegisterRequest;
import backend.entity.User;
import backend.security.JwtService;
import backend.service.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.security.Principal;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthControllerTest {


@Mock
private AuthService authService;

@Mock
private JwtService jwtService;

@Mock
private Principal principal;

@InjectMocks
private AuthController authController;

private User user;

private final String email =
        "test@example.com";

private final String token =
        "test.jwt.token";

@BeforeEach
void setUp() {

    user = new User(
            "Test",
            "User",
            email,
            "03001234567",
            "encodedPassword"
    );

    user.setId(1L);
}

@Test
void register_shouldReturnCreatedResponse() {

    RegisterRequest request =
            new RegisterRequest();

    request.setFirstName("Test");
    request.setLastName("User");
    request.setEmail(email);
    request.setPhone("03001234567");
    request.setPassword("password");

    when(authService.register(request))
            .thenReturn(user);

    when(jwtService.generateToken(email))
            .thenReturn(token);

    ResponseEntity<AuthResponse> result =
            authController.register(request);

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
            "Test",
            result.getBody().getFirstName()
    );

    assertEquals(
            "User",
            result.getBody().getLastName()
    );

    assertEquals(
            email,
            result.getBody().getEmail()
    );

    assertEquals(
            token,
            result.getBody().getToken()
    );

    verify(authService)
            .register(request);

    verify(jwtService)
            .generateToken(email);
}

@Test
void register_shouldGenerateTokenUsingPhone_whenEmailIsNull() {

    RegisterRequest request =
            new RegisterRequest();

    request.setFirstName("Test");
    request.setLastName("User");
    request.setPhone("03001234567");
    request.setPassword("password");

    User phoneUser =
            new User(
                    "Test",
                    "User",
                    null,
                    "03001234567",
                    "encodedPassword"
            );

    phoneUser.setId(2L);

    when(authService.register(request))
            .thenReturn(phoneUser);

    when(jwtService.generateToken(
            "03001234567"
    )).thenReturn(token);

    ResponseEntity<AuthResponse> result =
            authController.register(request);

    assertEquals(
            HttpStatus.CREATED,
            result.getStatusCode()
    );

    assertNotNull(result.getBody());

    assertEquals(
            "03001234567",
            result.getBody().getPhone()
    );

    assertEquals(
            token,
            result.getBody().getToken()
    );

    verify(jwtService)
            .generateToken("03001234567");
}

@Test
void login_shouldReturnOkResponse() {

    LoginRequest request =
            new LoginRequest();

    request.setIdentifier(email);
    request.setPassword("password");

    when(authService.login(request))
            .thenReturn(user);

    when(jwtService.generateToken(email))
            .thenReturn(token);

    ResponseEntity<AuthResponse> result =
            authController.login(request);

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
            "Test",
            result.getBody().getFirstName()
    );

    assertEquals(
            email,
            result.getBody().getEmail()
    );

    assertEquals(
            token,
            result.getBody().getToken()
    );

    verify(authService)
            .login(request);

    verify(jwtService)
            .generateToken(email);
}

@Test
void login_shouldGenerateTokenUsingPhone_whenEmailIsNull() {

    LoginRequest request =
            new LoginRequest();

    request.setIdentifier("03001234567");
    request.setPassword("password");

    User phoneUser =
            new User(
                    "Test",
                    "User",
                    null,
                    "03001234567",
                    "encodedPassword"
            );

    phoneUser.setId(2L);

    when(authService.login(request))
            .thenReturn(phoneUser);

    when(jwtService.generateToken(
            "03001234567"
    )).thenReturn(token);

    ResponseEntity<AuthResponse> result =
            authController.login(request);

    assertEquals(
            HttpStatus.OK,
            result.getStatusCode()
    );

    assertNotNull(result.getBody());

    assertEquals(
            "03001234567",
            result.getBody().getPhone()
    );

    assertEquals(
            token,
            result.getBody().getToken()
    );

    verify(jwtService)
            .generateToken("03001234567");
}

@Test
void changePassword_shouldReturnNoContent() {

    ChangePasswordRequest request =
            new ChangePasswordRequest();

    request.setCurrentPassword("oldPassword");
    request.setNewPassword("newPassword");

    when(principal.getName())
            .thenReturn(email);

    doNothing().when(authService)
            .changePassword(
                    email,
                    request
            );

    ResponseEntity<Void> result =
            authController.changePassword(
                    request,
                    principal
            );

    assertEquals(
            HttpStatus.NO_CONTENT,
            result.getStatusCode()
    );

    assertNull(result.getBody());

    verify(principal)
            .getName();

    verify(authService)
            .changePassword(
                    email,
                    request
            );
}


}
