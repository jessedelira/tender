package com.tender.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tender.app.models.Restaurant;
import com.tender.app.services.RestaurantService;


@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/restaurant")
public class RestaurantController {
    
    private final RestaurantService restaurantService;

    @Autowired
    public RestaurantController(RestaurantService restaurantService){
        this.restaurantService = restaurantService;
    }

    @GetMapping
    public Optional<Restaurant> getRestaurants(@RequestParam("id") Long id) {
        return restaurantService.getRestaurant(id);
    }

    @PostMapping
    public HttpStatus registerNewRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.addNewRestaurant(restaurant);
        return HttpStatus.OK;
    }


    @RequestMapping("/top")
    @GetMapping
    public List<Restaurant> topThreeRestaurants(){
        List<Restaurant> topThree = restaurantService.getTopThree();
        return topThree;
    }

}
