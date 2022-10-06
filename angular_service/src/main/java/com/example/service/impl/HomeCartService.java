package com.example.service.impl;

import com.example.model.HomeCart;
import com.example.repository.IHomeCartRepository;
import com.example.service.IHomeCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeCartService implements IHomeCartService {
    @Autowired
    private IHomeCartRepository iHomeCartRepository;

    @Override
    public List<HomeCart> findAllHomeCart() {
        return iHomeCartRepository.findAll();
    }
}
