package com.tender.app.configs;

import java.util.List;

import com.tender.app.models.Account;
import com.tender.app.repositories.AccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AccountConfig {
    @Bean
    CommandLineRunner createAccountsCommandLineRunner(AccountRepository repository){
        return args ->{
            Account jesse = new Account("jessedelira10", "Food32", "Jesse De Lira");
            Account noel = new Account("noel92","Bite10","Noel Barrera");
            Account griffin = new Account("IloveCheese90","SockMonkey12","Griffin Knipscheer");
            Account conner = new Account("theking921","Purple9","Conner Duling");
            
            // Increment of Work
            repository.saveAll(List.of(jesse,noel,griffin,conner));
        };
    }
}
