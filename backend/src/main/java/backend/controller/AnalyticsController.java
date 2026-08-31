package backend.controller;

import backend.dto.AnalyticsResponse;
import backend.entity.User;
import backend.repository.UserRepository;
import backend.service.AnalyticsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyticsController {


private static final Logger log =
        LoggerFactory.getLogger(AnalyticsController.class);

private final AnalyticsService analyticsService;
private final UserRepository userRepository;

public AnalyticsController(
        AnalyticsService analyticsService,
        UserRepository userRepository) {

    this.analyticsService = analyticsService;
    this.userRepository = userRepository;
}

@GetMapping
public ResponseEntity<?> getAnalytics(
        Authentication authentication) {

    if (authentication == null) {

        log.warn(
                "Unauthenticated request to analytics endpoint"
        );

        return ResponseEntity
                .status(401)
                .body("Unauthenticated");
    }

    String email = authentication.getName();

    Optional<User> userOpt =
            userRepository.findByEmail(email);

    if (userOpt.isEmpty()) {

        log.warn(
                "Analytics requested by unknown user"
        );

        return ResponseEntity
                .status(404)
                .body("User not found");
    }

    AnalyticsResponse resp =
            analyticsService.getAnalyticsForUser(
                    userOpt.get()
            );

    return ResponseEntity.ok(resp);
}

}
