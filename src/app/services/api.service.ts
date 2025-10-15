import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiRes } from '../interfaces/apires';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER = 'http://localhost:3000'

  constructor() { }

  // get all
  async selectAll(table: string): Promise<ApiRes> {
    try {
      const response = await axios.get(`${this.SERVER}/${table}`)
      return { status: 200, data: response.data }
    } catch (error: any) {
      return { status: 500, message: 'nemjo' }
    }
  }

  // get one
  async select(table: string, id: number): Promise<ApiRes> {
    try {
      const response = await axios.get(`${this.SERVER}/${table}/${id}`)
      return { status: 200, data: response.data }
    } catch (error: any) {
      return { status: 500, message: 'nemjo' }
    }
  }

  // többi egyértelmű
  async insert(table: string, data: any) {
    try {
      const response = await axios.post(`${this.SERVER}/${table}`, data)
      return { status: 200, message: 'felvéve a valamibe', data: response.data }
    } catch (error: any) {
      return { status: 500, message: 'nemjo' }
    }
  }

  async update(table: string, id: number, data: any) {
    try {
      const response = await axios.patch(`${this.SERVER}/${table}/${id}`, data)
      return { status: 200, message: 'módosítva lett a valami', data: response.data }
    } catch (error: any) {
      return { status: 500, message: 'nemjo' }
    }
  }

  async delete(table: string, id: number): Promise<ApiRes> {
    try {
      const response = await axios.delete(`${this.SERVER}/${table}/${id}`)
      return { status: 200, message: 'a cuc tööröl ve let' }
    } catch (error: any) {
      return { status: 500, message: 'nemjo' }
    }
  }

  async deleteAll(table: string, id: number): Promise<ApiRes> {
    try {
      const response = await axios.delete(`${this.SERVER}/${table}`)
      return { status: 200, message: 'mindennek annyi' }
    } catch (error: any) {
      return { status: 500, message: 'nemjo' }
    }
  }
}
