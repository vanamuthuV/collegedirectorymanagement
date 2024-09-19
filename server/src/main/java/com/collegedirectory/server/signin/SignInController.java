package com.collegedirectory.server.signin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signin")
public class SignInController {

    private final SignInService signInService;

    @Autowired
    public SignInController(SignInService signInService) {
        this.signInService = signInService;
    }

    // POST request to validate SignIn credentials
    @PostMapping("/validate")
    public ResponseEntity<Object> validateSignIn(@RequestBody SignInRequest signInRequest) {
        return signInService.validateSignIn(
            signInRequest.getUsername(), 
            signInRequest.getPassword(), 
            signInRequest.getRole()
        );
    }
}
