import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER = 'http://localhost:3000'

  constructor() { }

  async selectAll(table: string) {
    try {
      const response = await axios.get(`${this.SERVER}/${table}`)
      return response.data
    } catch (error:any) {
      return{message:'nemjo'}
    }
  }

  select() {

  }

  insert() {

  }

  update() {

  }

  delete() {

  }

  deleteAll() {

  }
}
