package com.tender.app.configs;
import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.tender.app.models.Restaurant;
import com.tender.app.repositories.RestaurantRepository;

public class RestaurantConfig {
    
    @Bean
    CommandLineRunner createRestaurantsCommandLineRunner(RestaurantRepository repository){
        return args->{
            Restaurant one = new Restaurant();
        }
    }
}
