package com.tender.app.repositories;

import java.util.Optional;

import com.tender.app.models.Account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

// This needs to be a interface
@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{
    
    // Finds an account from the Username
    @Query("SELECT a FROM Account a WHERE a.Username = ?1")
    Optional<Account> findByUsername(String username);
}
