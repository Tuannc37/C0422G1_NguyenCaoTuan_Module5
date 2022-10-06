package com.example.service.impl;

import com.example.model.Cart;
import com.example.repository.ICartRepository;
import com.example.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public Page<Cart> findCartAll(String name, Pageable pageable) {
        return iCartRepository.findByNameCartContaining(name,pageable);
    }

    @Override
    public List<Cart> findAllCart() {
        return iCartRepository.findAll();
    }

    @Override
    public Optional<Cart> findByIdCart(int id) {
        return iCartRepository.findById(id);
    }

    @Override
    public void createCart(Cart cart) {
        iCartRepository.save(cart);
    }

    @Override
    public void deleteCart(int id) {
        iCartRepository.deleteById(id);
    }

    @Override
    public void updateCart(Cart cart) {
        iCartRepository.save(cart);
    }
}
