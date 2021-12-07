package com.tender.app.repositories;

import java.util.List;
import java.util.Optional;

import com.tender.app.models.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long>{
    
    // Finds a restaurant from the restaurant id
    @Query("SELECT r FROM Restaurant r WHERE r.Id = ?1")
    Optional<Restaurant> findById(Long id);

    @Query("SELECT r FROM Restaurant r WHERE r.Name = ?1")
    Optional<Restaurant> findByName(String name);

    @Query("SELECT r FROM Restaurant r WHERE r.Type = ?1")
    List<Restaurant> findByType(String type);
    
    /**
     * YOU WILL NEED TO MAKE THE QUERY
     * @return
     */
    @Query("SELECT r FROM Restaurant r")
    List<Restaurant> findTop3();
}
