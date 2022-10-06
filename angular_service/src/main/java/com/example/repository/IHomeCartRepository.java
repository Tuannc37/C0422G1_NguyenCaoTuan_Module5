package com.example.repository;

import com.example.model.HomeCart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IHomeCartRepository extends JpaRepository<HomeCart,Integer> {
}
