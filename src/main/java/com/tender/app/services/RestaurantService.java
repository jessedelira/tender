package com.tender.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tender.app.models.Restaurant;
import com.tender.app.repositories.RestaurantRepository;

@Service
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantService (RestaurantRepository restaurantRepository){
        this.restaurantRepository = restaurantRepository;
    }

    public Optional<Restaurant> getRestaurant(Long id){
        return restaurantRepository.findById(id);
    }

    public void addNewRestaurant(Restaurant restaurant){
        Optional<Restaurant> foundRestaurant = restaurantRepository.findByName(restaurant.getName());
        if(foundRestaurant.isPresent()){
            throw new IllegalStateException("The restaurant already exists");
        }

        restaurantRepository.save(restaurant);
        System.out.println("Restaurant Created");
    }

    public List<Restaurant> getTopThree(){
        return restaurantRepository.findTop3();
    }
}
