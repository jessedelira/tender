package com.tender.app.repositories;

import java.util.Optional;

import com.tender.app.models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

// This needs to be a interface
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    
    @Query("SELECT u FROM User u WHERE s.Username = ?1")
    Optional<User> findByUsername(String username);
}
