import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Category } from '../../../interfaces/category';
import { ApiRes } from '../../../interfaces/apires';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catform',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class CatFormComponent implements OnInit {
  
  id:number | null = null

  newCategory: Category = {
    id: 0,
    kategoriaNev: ''
  }

  allCategories:Category[] = []
  constructor(
    private api:ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log('ID:', this.id)

    if (this.id) {
      this.api.select('categories', this.id).then((res:ApiRes) => {
        this.newCategory = res.data[0]
      })
    }

    this.getAllCategories()
  }

  getAllCategories() {
    this.api.selectAll('categories').then((res: ApiRes) => {
      this.allCategories = res.data
    })
  }

  save() {
    if (this.newCategory.kategoriaNev == '') {
      alert('Nem adtál meg kategória nevet')
      return
    }

    let idx = this.allCategories.findIndex(item => item.kategoriaNev.toLowerCase() == this.newCategory.kategoriaNev.toLowerCase())

    if (idx > -1) {
      alert('már van ilyen kategória')
      return
    }

    if (!this.id) {
      this.api.insert('categories', this.newCategory).then((res:ApiRes) => {
        if (res.status == 200) {
          alert(res.message)
          this.newCategory= {
            id: 0,
            kategoriaNev: ''
          }
          this.getAllCategories()
        } else {
          alert(res.message)
        }
      })
    } else {
      this.api.update('categories', this.id, this.newCategory).then((res:ApiRes) => {
        if (res.status == 200) {
          alert(res.message)
          this.router.navigate(['/categories'])
          this.getAllCategories()
        } else {
          alert(res.message)
        }
      })
    }
  }
}
