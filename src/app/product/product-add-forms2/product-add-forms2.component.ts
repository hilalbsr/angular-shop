import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CatagoryService } from 'src/app/services/catagory.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CatagoryService, ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder: FormBuilder,private categoryService:CatagoryService, private productService:ProductService,
    private alertifyService:AlertifyService) { }

  product: Product = new Product();
  productAddForm!: FormGroup;
  categories:Category[] | undefined;


  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  add() {
    if (this.productAddForm.valid)
      this.product = Object.assign({}, this.productAddForm.value)

      this.productService.addProduct(this.product).subscribe(data => {
        this.alertifyService.success(data.name + " " + "başarıyla eklendi.")
      });
  }
}
