package backend.service;

import backend.dto.ChangePasswordRequest;
import backend.dto.LoginRequest;
import backend.dto.RegisterRequest;
import backend.entity.User;
import backend.exception.DuplicateResourceException;
import backend.exception.InvalidCredentialsException;
import backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private AuthService authService;

    private RegisterRequest registerRequest;
    private LoginRequest loginRequest;
    private ChangePasswordRequest changePasswordRequest;
    private User user;

    @BeforeEach
    void setUp() {

        registerRequest = new RegisterRequest();
        registerRequest.setFirstName("Faiza");
        registerRequest.setLastName("Altaf");
        registerRequest.setEmail("faiza@gmail.com");
        registerRequest.setPhone("03001234567");
        registerRequest.setPassword("Password123");

        loginRequest = new LoginRequest();
        loginRequest.setIdentifier("faiza@gmail.com");
        loginRequest.setPassword("Password123");

        changePasswordRequest = new ChangePasswordRequest();
        changePasswordRequest.setCurrentPassword("Password123");
        changePasswordRequest.setNewPassword("NewPassword123");

        user = new User();
        user.setId(1L);
        user.setFirstName("Faiza");
        user.setLastName("Altaf");
        user.setEmail("faiza@gmail.com");
        user.setPhone("03001234567");
        user.setPassword("encodedPassword");
    }

    @Test
    void register_ShouldRegisterUserSuccessfully() {

        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(userRepository.existsByPhone(anyString())).thenReturn(false);
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(user);

        User savedUser = authService.register(registerRequest);

        assertNotNull(savedUser);
        assertEquals("faiza@gmail.com", savedUser.getEmail());

        verify(userRepository).save(any(User.class));
    }

    @Test
    void register_ShouldThrowDuplicateEmailException() {

        when(userRepository.existsByEmail(anyString())).thenReturn(true);

        assertThrows(
                DuplicateResourceException.class,
                () -> authService.register(registerRequest)
        );
    }

    @Test
    void register_ShouldThrowDuplicatePhoneException() {

        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(userRepository.existsByPhone(anyString())).thenReturn(true);

        assertThrows(
                DuplicateResourceException.class,
                () -> authService.register(registerRequest)
        );
    }

    @Test
    void register_ShouldThrowDatabaseException() {

        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(userRepository.existsByPhone(anyString())).thenReturn(false);
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");

        when(userRepository.save(any(User.class)))
                .thenThrow(DataIntegrityViolationException.class);

        assertThrows(
                DataIntegrityViolationException.class,
                () -> authService.register(registerRequest)
        );
    }

    @Test
    void login_ShouldLoginSuccessfully() {

        when(userRepository.findByEmail(anyString()))
                .thenReturn(Optional.of(user));

        when(passwordEncoder.matches(anyString(), anyString()))
                .thenReturn(true);

        User loggedInUser = authService.login(loginRequest);

        assertEquals(user.getEmail(), loggedInUser.getEmail());
    }

    @Test
    void login_ShouldThrowUserNotFoundException() {

        when(userRepository.findByEmail(anyString()))
                .thenReturn(Optional.empty());

        assertThrows(
                InvalidCredentialsException.class,
                () -> authService.login(loginRequest)
        );
    }

    @Test
    void login_ShouldThrowInvalidPasswordException() {

        when(userRepository.findByEmail(anyString()))
                .thenReturn(Optional.of(user));

        when(passwordEncoder.matches(anyString(), anyString()))
                .thenReturn(false);

        assertThrows(
                InvalidCredentialsException.class,
                () -> authService.login(loginRequest)
        );
    }

    @Test
    void changePassword_ShouldChangePasswordSuccessfully() {

        when(userRepository.findByEmail(anyString()))
                .thenReturn(Optional.of(user));

        when(passwordEncoder.matches(
                changePasswordRequest.getCurrentPassword(),
                user.getPassword()))
                .thenReturn(true);

        when(passwordEncoder.matches(
                changePasswordRequest.getNewPassword(),
                user.getPassword()))
                .thenReturn(false);

        when(passwordEncoder.encode(anyString()))
                .thenReturn("newEncodedPassword");

        authService.changePassword(
                user.getEmail(),
                changePasswordRequest
        );

        verify(userRepository).save(user);
    }

    @Test
    void changePassword_ShouldThrowInvalidCurrentPasswordException() {

        when(userRepository.findByEmail(anyString()))
                .thenReturn(Optional.of(user));

        when(passwordEncoder.matches(anyString(), anyString()))
                .thenReturn(false);

        assertThrows(
                InvalidCredentialsException.class,
                () -> authService.changePassword(
                        user.getEmail(),
                        changePasswordRequest)
        );
    }

    @Test
    void changePassword_ShouldThrowSamePasswordException() {

        when(userRepository.findByEmail(anyString()))
                .thenReturn(Optional.of(user));

        when(passwordEncoder.matches(
                changePasswordRequest.getCurrentPassword(),
                user.getPassword()))
                .thenReturn(true);

        when(passwordEncoder.matches(
                changePasswordRequest.getNewPassword(),
                user.getPassword()))
                .thenReturn(true);

        assertThrows(
                IllegalArgumentException.class,
                () -> authService.changePassword(
                        user.getEmail(),
                        changePasswordRequest)
        );
    }
}