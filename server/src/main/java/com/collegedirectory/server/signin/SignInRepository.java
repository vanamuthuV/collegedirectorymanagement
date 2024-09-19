package com.collegedirectory.server.signin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignInRepository extends JpaRepository<SignIn, Integer> {
    // Custom method to find a user by username, password, and role
    SignIn findByUsernameAndPasswordAndRole(String username, String password, String role);
}
