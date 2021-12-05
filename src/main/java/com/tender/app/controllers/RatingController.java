package com.tender.app.controllers;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tender.app.models.Rating;
import com.tender.app.services.RatingService;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/rating")
public class RatingController {
    
    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService){
        this.ratingService = ratingService;
    }

    @GetMapping
    public List<Rating> getRatings(){
        return ratingService.getRatings();
    }

    @PostMapping
    public HttpStatus registerNewRating(@RequestBody Rating rating){
        ratingService.addNewRating(rating);
        return HttpStatus.OK;
    }

    @RequestMapping("/account")
    @GetMapping
    public List<Rating> getRatingByAccount(@RequestParam("Id") Long id){
        return ratingService.getRatingsByUser(id);
    }


}
