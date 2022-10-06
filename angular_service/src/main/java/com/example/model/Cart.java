package com.example.model;
import javax.persistence.*;

@Entity
@Table(name = "xe")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_xe")
    private int id;

    @Column(name = "ten_xe")
    private String nameCart;

    @Column(name = "so_dien_thoai")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "ma_nha_xe", referencedColumnName = "ma_nha_xe")
    private HomeCart homeCart;

    public Cart() {
    }

    public Cart(int id, String nameCart, String phoneNumber, String email, HomeCart homeCart) {
        this.id = id;
        this.nameCart = nameCart;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.homeCart = homeCart;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameCart() {
        return nameCart;
    }

    public void setNameCart(String nameCart) {
        this.nameCart = nameCart;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public HomeCart getHomeCart() {
        return homeCart;
    }

    public void setHomeCart(HomeCart homeCart) {
        this.homeCart = homeCart;
    }
}
