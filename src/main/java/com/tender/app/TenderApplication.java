package com.tender.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;



@RestController
@SpringBootApplication
public class TenderApplication {

	public static void main(String[] args) {
		SpringApplication.run(TenderApplication.class, args);
	}

}
