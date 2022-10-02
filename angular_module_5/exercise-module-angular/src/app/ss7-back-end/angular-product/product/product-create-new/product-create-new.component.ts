import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create-new',
  templateUrl: './product-create-new.component.html',
  styleUrls: ['./product-create-new.component.css']
})
export class ProductCreateNewComponent implements OnInit {

  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService, private router: Router) {

    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  ngOnInit() {
    this.getAllCategory();
    console.log(this.categories)
  }

  submit() {
    let category: Category;
    const product = this.productForm.value;
    console.log(this.productForm.value)
    this.categoryService.findById(this.productForm.value.category).subscribe(n => {
      category = n;
      product.category = category;
      this.productService.saveProduct(product).subscribe(() => {
        alert('Tạo thành công');
        this.router.navigateByUrl('product/list/new');
      }, e => console.log(e));
    })

    product.category = {
      id: product.category
    };

  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }

}
