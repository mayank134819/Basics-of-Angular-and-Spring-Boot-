package com.service.registeredproduct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication     // tells that this is a spring boot application
public class RegisteredproductApplication {

	public static void main(String[] args) {
		// creates a servelet container and hosts application on it
		SpringApplication.run(RegisteredproductApplication.class, args);  
	}

}
