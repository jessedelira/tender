package com.tender.app.repositories;

import java.util.Optional;

import com.tender.app.models.Rating;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

// This needs to be a interface
@Repository
public interface RatingRepository extends JpaRepository<Rating, Long>{
    
    // Finds an rating from a restaurants id
    @Query("SELECT r FROM Rating r WHERE r.restaurantId = ?1 LIMIT 1")
    Optional<Rating> findByRestaurantId(String id);

    // Finds an rating from the an account id
    @Query("SELECT r FROM Rating r WHERE r.accountId = ?1 LIMIT 1")
    Optional<Rating> findByAccountId(String id);
}

