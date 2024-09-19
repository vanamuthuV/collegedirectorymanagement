package com.collegedirectory.server.signin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SignInService {

    private final SignInRepository signInRepository;

    @Autowired
    public SignInService(SignInRepository signInRepository) {
        this.signInRepository = signInRepository;
    }

    // Validate the sign-in credentials and return user details or error message
    public ResponseEntity<Object> validateSignIn(String username, String password, String role) {
        SignIn signIn = signInRepository.findByUsernameAndPasswordAndRole(username, password, role);

        if (signIn != null) {
            // Return full user details if the credentials are correct
            return ResponseEntity.ok(signIn); // Return the full SignIn entity with all details (e.g., username, email, etc.)
        } else {
            // Return a 401 Unauthorized response with a message if credentials don't match
            return ResponseEntity.status(401).body("Invalid credentials. Please try again.");
        }
    }
}
