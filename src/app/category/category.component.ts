import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../services/catagory.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CatagoryService]
})

export class CategoryComponent implements OnInit {

  constructor(private categoryService: CatagoryService) { }
  title = "Kategori Listesi";
  categories: Category[] = []

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }

}
