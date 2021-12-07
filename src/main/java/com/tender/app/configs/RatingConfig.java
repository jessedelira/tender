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
            Rating one = new Rating(1, 2, 5, "This place was the worst place I have ever eaten", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating two = new Rating(2, 1, 4, "It wasn't half bad, I would def come back again!!", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating three = new Rating(3, 3, 2, "I would rather starve to death than eat this food, barf.", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating four = new Rating(4, 3, 4, "After our hostess rolled her eyes at us for not wanting to sit where she placed us in a nearly empty dining room, things went down hill.", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating five = new Rating(5, 3, 1, "The service couldn't have been better, they even cleaned my shoes for me!", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating six = new Rating(6, 3, 4, "It was ok, nothing more and nothing less", LocalDate.of(2021, Month.FEBRUARY, 16));
            Rating seven = new Rating(7, 3, 3, "Pig Schlop. Terrible. Yuck.", LocalDate.of(2021, Month.FEBRUARY, 16));
            repository.saveAll(List.of(one,two,three,four,five,six,seven));
        };
    }
}
