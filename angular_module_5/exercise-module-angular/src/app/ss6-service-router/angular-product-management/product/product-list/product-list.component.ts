import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  deleteId: number;
  deleteName: string;

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    return this.getAll();
  }

  getAll(){
    this.products = this.productService.getAll()
  }

  deleteCustomer(temp: Product) {
    this.deleteId = temp.id;
    this.deleteName = temp.name;
  }

  delete(idDelete: any) {
    this.productService.delete(idDelete);
    this.ngOnInit();
  }
}
