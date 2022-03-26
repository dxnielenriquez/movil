import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-addproductos',
  templateUrl: './addproductos.page.html',
  styleUrls: ['./addproductos.page.scss'],
})
export class AddproductosPage implements OnInit {

  producto: FormGroup;

  focused: boolean[] = [];

  constructor(private productoService: ProductoService, private formBuilder: FormBuilder,
    public alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {
    this.producto = this.formBuilder.group({
      producto: ['', [Validators.required,]],
      cantidad: ['', [Validators.required,]],
      precio_c: ['', [Validators.required,]],
      precio_v: ['', [Validators.required,]],

    });
  }
  guardar(event: Event) {
    event.preventDefault();
    if (this.producto.valid) {
      this.productoService.create(this.producto.value).subscribe(
        resp => {
          this.buildForm();
        }, error => {
        }
      )
    } else {
    }
  }

}
