package backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    // Secret key for signing JWT tokens
    // This is for development purposes.
    // In production, keep this in environment variables.
    private static final String SECRET_KEY =
            "mySecretKeyForContactManagementSystemJwtAuthentication2026";

    // Token validity: 24 hours
    private static final long EXPIRATION_TIME =
            1000 * 60 * 60 * 24;

    // Generate JWT token
    public String generateToken(String identifier) {

        return Jwts.builder()
                .subject(identifier)
                .issuedAt(new Date())
                .expiration(
                        new Date(System.currentTimeMillis()
                                + EXPIRATION_TIME)
                )
                .signWith(getSigningKey())
                .compact();
    }

    // Extract identifier from token
    public String extractIdentifier(String token) {

        return getClaims(token).getSubject();
    }

    // Check whether token is valid
    public boolean isTokenValid(String token) {

        try {
            getClaims(token);
            return true;

        } catch (Exception e) {
            return false;
        }
    }

    // Get JWT claims
    private Claims getClaims(String token) {

        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    // Create signing key
    private SecretKey getSigningKey() {

        byte[] keyBytes = Decoders.BASE64.decode(
                java.util.Base64.getEncoder()
                        .encodeToString(SECRET_KEY.getBytes())
        );

        return Keys.hmacShaKeyFor(keyBytes);
    }
}