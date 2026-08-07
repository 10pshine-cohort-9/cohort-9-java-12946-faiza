package backend.controller;

import backend.dto.AuthResponse;
import backend.dto.ChangePasswordRequest;
import backend.dto.LoginRequest;
import backend.dto.RegisterRequest;
import backend.entity.User;
import backend.security.JwtService;
import backend.service.AuthService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowCredentials = "true"
)
public class AuthController {

    private static final Logger log =
            LoggerFactory.getLogger(AuthController.class);

    private final AuthService authService;
    private final JwtService jwtService;

    @Value("${app.cookie.secure:true}")
    private boolean secureCookie;


    public AuthController(
            AuthService authService,
            JwtService jwtService) {

        this.authService = authService;
        this.jwtService = jwtService;
    }


    // Registration API
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @Valid @RequestBody RegisterRequest request) {

        log.info("Registration API request received");

        User user = authService.register(request);

        String identifier = user.getEmail() != null
                ? user.getEmail()
                : user.getPhone();

        String token =
                jwtService.generateToken(identifier);

        log.info(
                "Registration API completed successfully"
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .header(
                        HttpHeaders.SET_COOKIE,
                        createJwtCookie(token).toString()
                )
                .body(toAuthResponse(user, token));
    }


    // Login API
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @Valid @RequestBody LoginRequest request) {

        log.info("Login API request received");

        User user = authService.login(request);

        String identifier = user.getEmail() != null
                ? user.getEmail()
                : user.getPhone();

        String token =
                jwtService.generateToken(identifier);

        log.info(
                "Login API completed successfully"
        );

        return ResponseEntity
                .ok()
                .header(
                        HttpHeaders.SET_COOKIE,
                        createJwtCookie(token).toString()
                )
                .body(toAuthResponse(user, token));
    }


    // Change Password API
    @PutMapping("/change-password")
    public ResponseEntity<Void> changePassword(
            @Valid @RequestBody ChangePasswordRequest request,
            Principal principal) {

        log.info(
                "Change password API request received"
        );

        authService.changePassword(
                principal.getName(),
                request
        );

        log.info(
                "Change password API completed successfully"
        );

        return ResponseEntity.noContent().build();
    }


    // Logout API
    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {

        log.info("Logout API request received");

        log.info(
                "Logout API completed successfully"
        );

        return ResponseEntity
                .noContent()
                .header(
                        HttpHeaders.SET_COOKIE,
                        createLogoutCookie().toString()
                )
                .build();
    }


    // Create JWT Cookie
    private ResponseCookie createJwtCookie(
            String token) {

        return ResponseCookie
                .from("jwt", token)
                .httpOnly(true)
                .secure(secureCookie)
                .path("/")
                .sameSite("Lax")
                .maxAge(24 * 60 * 60)
                .build();
    }


    // Clear JWT Cookie
    private ResponseCookie createLogoutCookie() {

        return ResponseCookie
                .from("jwt", "")
                .httpOnly(true)
                .secure(secureCookie)
                .path("/")
                .sameSite("Lax")
                .maxAge(0)
                .build();
    }


    // Convert User to AuthResponse
    private AuthResponse toAuthResponse(
            User user,
            String token) {

        return new AuthResponse(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPhone(),
                token
        );
    }

}