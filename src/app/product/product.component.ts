import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify:any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus ZenBook", imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" },
    { id: 2, name: "Mouse", price: 32, categoryId: 12, description: "HP", imageUrl: "https://images.unsplash.com/photo-1599779600619-1012639ed04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" }
  ];

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    alertify.success(product.name + ' eklendi.');
  }
}
