import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${url}productos`);
  }

  getOne(id: any) {
    return this.http.get(`${url}productos/${id}`);
  }
}
