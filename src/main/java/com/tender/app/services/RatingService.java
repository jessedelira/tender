package com.tender.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tender.app.models.Rating;
import com.tender.app.repositories.RatingRepository;

@Service
public class RatingService {
    
    private final RatingRepository ratingRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository){
        this.ratingRepository = ratingRepository;
    }

    public List<Rating> getRatings(){
        return ratingRepository.findAll();
    }


    public void addNewRating(Rating rating){
        // Add where it checks the user and restaurant id both to see if it is repeated
        Optional<Rating> foundRating = ratingRepository.findByRatingId(rating.getRatingId());
        if(foundRating.isPresent()){
            throw new IllegalStateException("That rating already exists for restaurant and/or user");
        
        }

        ratingRepository.save(rating);
        System.out.println("Rating Created.");
    }


    public List<Rating> getRatingsByUser(Long id){
        List<Rating> foundRatings = ratingRepository.findByAccountId(id);
        return foundRatings;

        
    }
}
