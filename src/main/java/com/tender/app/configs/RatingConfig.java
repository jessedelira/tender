package com.tender.app.configs;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import com.tender.app.models.Rating;
import com.tender.app.repositories.RatingRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class RatingConfig {
    @Bean
    CommandLineRunner createRatingsCommandLineRunner(RatingRepository repository){
        return args->{
            Rating one = new Rating(1, 2, 4, "This place was the worst place I have ever eaten", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating two = new Rating(2, 1, 4, "This place was the worst place I have ever eaten", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating three = new Rating(3, 3, 4, "This place was the worst place I have ever eaten", LocalDate.of(2021, Month.FEBRUARY, 16));

            repository.saveAll(List.of(one,two,three));
        };
    }
}
