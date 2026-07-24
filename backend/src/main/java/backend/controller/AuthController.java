package backend.controller;

import backend.dto.AuthResponse;
import backend.dto.LoginRequest;
import backend.dto.RegisterRequest;
import backend.entity.User;
import backend.security.JwtService;
import backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;
    private final JwtService jwtService;

    public AuthController(AuthService authService,
                          JwtService jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }

    // Registration API
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @Valid @RequestBody RegisterRequest request) {

        User user = authService.register(request);

        String token = jwtService.generateToken(
                request.getEmail() != null
                        ? request.getEmail()
                        : request.getPhone()
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(toAuthResponse(user, token));
    }

    // Login API
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @Valid @RequestBody LoginRequest request) {

        User user = authService.login(request);

        String token = jwtService.generateToken(
                request.getIdentifier()
        );

        return ResponseEntity.ok(
                toAuthResponse(user, token)
        );
    }

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