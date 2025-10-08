import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-catlist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CategoryListComponent  implements OnInit{
  categories: Category[] = []

  async ngOnInit() {
    try {
      const response = await axios.get('http://localhost:3000/categories')
      this.categories = response.data
    } catch (error) {
      console.log(error)
      alert('nemjo')
    }

    console.log(this.categories)
  }
}
