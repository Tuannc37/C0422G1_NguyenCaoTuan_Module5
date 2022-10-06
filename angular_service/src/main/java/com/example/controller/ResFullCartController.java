package com.example.controller;

import com.example.model.Cart;
import com.example.service.ICartService;
import com.example.service.IHomeCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@CrossOrigin
@Controller
@RequestMapping("cart/api")
public class ResFullCartController {
    @Autowired
    private ICartService iCartService;

    @Autowired
    private IHomeCartService iHomeCartService;

    @GetMapping("/list")
    public ResponseEntity<Page<Cart>> findAll(@PageableDefault(page = 0, size = 5) Pageable pageable,
                                              @RequestParam Optional<String> name){
        String nameVal = name.orElse("");
        Page<Cart> carts = iCartService.findCartAll(nameVal, pageable);
        if(carts.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(carts, HttpStatus.OK);
        }
    }
}
