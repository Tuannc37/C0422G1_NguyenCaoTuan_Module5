package com.example.model;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "nha_xe")
public class HomeCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_nha_xe")
    private int id;

    @Column(name = "so_xe")
    private String numberCart;

    @Column(name = "loai_xe")
    private String typeCart;

    @Column(name = "noi_xuat_phat")
    private String startAddress;

    @Column(name = "noi_ket_thuc")
    private String endAddress;

    @Column(name = "gio_khoi_hanh")
    private String startGo;

    @Column(name = "gio_den")
    private String startEnd;

    @OneToMany(mappedBy = "homeCart")
    @JsonBackReference
    private Set<Cart> cartSet;

    public HomeCart() {
    }

    public HomeCart(int id, String numberCart, String typeCart, String startAddress, String endAddress, String startGo, String startEnd, Set<Cart> cartSet) {
        this.id = id;
        this.numberCart = numberCart;
        this.typeCart = typeCart;
        this.startAddress = startAddress;
        this.endAddress = endAddress;
        this.startGo = startGo;
        this.startEnd = startEnd;
        this.cartSet = cartSet;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNumberCart() {
        return numberCart;
    }

    public void setNumberCart(String numberCart) {
        this.numberCart = numberCart;
    }

    public String getTypeCart() {
        return typeCart;
    }

    public void setTypeCart(String typeCart) {
        this.typeCart = typeCart;
    }

    public String getStartAddress() {
        return startAddress;
    }

    public void setStartAddress(String startAddress) {
        this.startAddress = startAddress;
    }

    public String getEndAddress() {
        return endAddress;
    }

    public void setEndAddress(String endAddress) {
        this.endAddress = endAddress;
    }

    public String getStartGo() {
        return startGo;
    }

    public void setStartGo(String startGo) {
        this.startGo = startGo;
    }

    public String getStartEnd() {
        return startEnd;
    }

    public void setStartEnd(String startEnd) {
        this.startEnd = startEnd;
    }

    public Set<Cart> getCartSet() {
        return cartSet;
    }

    public void setCartSet(Set<Cart> cartSet) {
        this.cartSet = cartSet;
    }
}
