package com.collegedirectory.server.login;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginInterface extends JpaRepository<Login, Integer> {
    
}
