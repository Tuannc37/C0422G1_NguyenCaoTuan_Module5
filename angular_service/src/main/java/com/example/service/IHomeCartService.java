package com.example.service;

import com.example.model.Cart;
import com.example.model.HomeCart;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IHomeCartService {
    List<HomeCart> findAllHomeCart();
}
