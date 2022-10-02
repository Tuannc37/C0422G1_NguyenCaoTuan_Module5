import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list-new',
  templateUrl: './product-list-new.component.html',
  styleUrls: ['./product-list-new.component.css']
})
export class ProductListNewComponent implements OnInit {
  deleteId: number;
  deleteName: string;
  products: Product[] = [];
  valueDelete = [];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(temp: Product) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  delete(idDelete: any) {
    this.productService.deleteProduct(idDelete).subscribe(() =>{
      this.getAll();
    });
  }
}
