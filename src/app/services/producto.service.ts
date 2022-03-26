import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
const url = environment.url;
export interface Producto {
  id_producto: string;
  producto: string;
  cantidad: string;
  precio_c: string;
  precio_v: string;
  imagePath: string;
  id_empresa: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url2 = 'http://127.0.0.1:8000/api/productos';

  constructor(private http: HttpClient,
  ) { }



  getAll() {
    return this.http.get<any>(`${url}productos`);
  }

  getOne(id: any) {
    return this.http.get(`${url}productos/${id}`);
  }

  /*  create(producto: Producto) {
     return this.http.post(`${url}productos/${producto}`);
   } */
  create(productos: string) {
    return this.http.post(`${url}productos`, productos);
  }


  /* update(producto: Producto, id_producto: string) {
    return this.http.put(this.url2 + '/' + id_producto, producto);
  } */

  update(productos: any, id_producto: any) {
    return this.http.put(`${url}productos/${id_producto}`, productos);
  }


  remove(id_producto: string) {
    return this.http.delete(`${url}productos/${id_producto}`);
  }

}
