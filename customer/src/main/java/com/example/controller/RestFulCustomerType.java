package com.example.controller;

import com.example.model.customer.CustomerType;
import com.example.service.customer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("customerType/api")
public class RestFulCustomerType {
    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @GetMapping("")
    public ResponseEntity<List<CustomerType>> findAll(){
        List<CustomerType> customerTypes = iCustomerTypeService.findAllCustomerType();
        if(customerTypes.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(customerTypes, HttpStatus.OK);
        }
    }

}
