package com.service.registeredproduct.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service.registeredproduct.models.RegisteredProduct;

public interface RegProdRepository extends JpaRepository<RegisteredProduct, Long> {

}
