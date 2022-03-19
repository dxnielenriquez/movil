import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('http://127.0.0.1:8000/api/list');
  }

  post(user: any) {
    return this.http.post('http://127.0.0.1:8000/api/prueba', user);
  }
}
