package com.collegedirectory.server.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final LoginInterface loginInterface;

    @Autowired
    // Constructor injection
    public LoginService(LoginInterface loginInterface) {
        this.loginInterface = loginInterface;
    }

    // Method to create a new login entity
    public ResponseEntity<Object> newLogEntity(Login login) {
        try {
            // Save the login entity to the database
            loginInterface.save(login);

            // Return a success response
            return new ResponseEntity<>(login, HttpStatus.CREATED);
        } catch (Exception e) {
            // Handle any errors that occur during saving
            return new ResponseEntity<>("Error creating login entity: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Other service methods can go here
}
