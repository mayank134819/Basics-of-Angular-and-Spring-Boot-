package com.service.registeredproduct.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.service.registeredproduct.models.RegisteredProduct;
import com.service.registeredproduct.repositories.RegProdRepository;

@RestController    // Identifies a class as a controller
@RequestMapping("/api/v1/registeredproducts")  // used to map request to url
public class RegisteredProductsController {
	@Autowired    // Dependency Injection
	private RegProdRepository regprodRepository;
		
	@GetMapping
	public List<RegisteredProduct> list() {
		return regprodRepository.findAll();

	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody RegisteredProduct registeredproduct) {
		regprodRepository.save(registeredproduct);
	}
	@GetMapping("/{id}")
	public RegisteredProduct get(@PathVariable("id") long id) {
		return regprodRepository.getOne(id);
	}

}
