package com.example.repository;

import com.example.model.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ICartRepository extends JpaRepository<Cart,Integer> {
    Page<Cart> findByNameCartContaining(String name, Pageable pageable);
}
