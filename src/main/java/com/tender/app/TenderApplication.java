package com.tender.app;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;



@RestController
@SpringBootApplication
public class TenderApplication {

	public static void main(String[] args) {
		SpringApplication.run(TenderApplication.class, args);

		Runnable applicationRunnable = new Runnable() {
			public void run(){
				System.out.println("Application running...");
			}
		};
		ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
		executor.scheduleAtFixedRate(applicationRunnable, 0, 3, TimeUnit.SECONDS);
	}

}
