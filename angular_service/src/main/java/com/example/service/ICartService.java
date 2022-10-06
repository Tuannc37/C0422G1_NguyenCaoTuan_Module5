package com.example.service;

import com.example.model.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    Page<Cart> findCartAll(String name, Pageable pageable);
    List<Cart> findAllCart();
    Optional<Cart> findByIdCart(int id);
    void createCart(Cart cart);
    void deleteCart(int id);
    void updateCart(Cart cart);
}
