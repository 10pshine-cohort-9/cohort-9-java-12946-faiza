package backend.service;

import backend.dto.LoginRequest;
import backend.dto.RegisterRequest;
import backend.entity.User;
import backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // User Registration
    public User register(RegisterRequest request) {

        // Check that email or phone is provided
        if ((request.getEmail() == null || request.getEmail().isBlank())
                && (request.getPhone() == null || request.getPhone().isBlank())) {

            throw new IllegalArgumentException(
                    "Either email or phone number is required"
            );
        }

        // Check duplicate email
        if (request.getEmail() != null
                && !request.getEmail().isBlank()
                && userRepository.existsByEmail(request.getEmail())) {

            throw new IllegalArgumentException(
                    "Email is already registered"
            );
        }

        // Check duplicate phone
        if (request.getPhone() != null
                && !request.getPhone().isBlank()
                && userRepository.existsByPhone(request.getPhone())) {

            throw new IllegalArgumentException(
                    "Phone number is already registered"
            );
        }

        // Create new user
        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());

        // Hash password before saving
        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        return userRepository.save(user);
    }

    // User Login
    public User login(LoginRequest request) {

        String identifier = request.getIdentifier();

        User user;

        // Check if identifier is email
        if (identifier.contains("@")) {

            user = userRepository.findByEmail(identifier)
                    .orElseThrow(() -> new IllegalArgumentException(
                            "Invalid email or password"
                    ));

        } else {

            // Otherwise treat identifier as phone
            user = userRepository.findByPhone(identifier)
                    .orElseThrow(() -> new IllegalArgumentException(
                            "Invalid phone or password"
                    ));
        }

        // Verify password
        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new IllegalArgumentException(
                    "Invalid email/phone or password"
            );
        }

        return user;
    }
}