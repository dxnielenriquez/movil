import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
const url = environment.url;

export interface Personal {
  id_empleado: string;
  nombre: string;
  apellido_p: string;
  apellido_m: string;
  telefono: string;
  correo: string;
  sueldo: string;
  id_empresa: string;
}

@Injectable({
  providedIn: 'root'
})

export class PersonalService {
  private url2 = 'http://127.0.0.1:8000/api/empleados';

  constructor(private http: HttpClient,
  ) { }
  getAll() {
    return this.http.get<any>(`${url}empleados`);
  }

  getOne(id: any) {
    return this.http.get(`${url}empleados/${id}`);
  }

  /*  create(producto: Producto) {
     return this.http.post(`${url}productos/${producto}`);
   } */
  create(personal: string) {
    return this.http.post(`${url}empleados`, personal);
  }


  /* update(producto: Producto, id_producto: string) {
    return this.http.put(this.url2 + '/' + id_producto, producto);
  } */

  update(personal: any, id_empleado: any) {
    return this.http.put(`${url}empleados/${id_empleado}`, personal);
  }


  remove(id_empleado: string) {
    return this.http.delete(`${url}empleados/${id_empleado}`);
  }

}