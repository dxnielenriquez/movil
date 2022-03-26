import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Producto, ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-user-modal',
  templateUrl: './producto-modal.page.html',
  styleUrls: ['./producto-modal.page.scss'],
})
export class ProductoModalPage implements OnInit {

  @Input() producto: Producto;
  isUpdate = false;
  data = {
    producto: '',
    cantidad: '',
    precio_c: '',
    precio_v: '',
    imagePath: '',
    id_empresa: ''
  };

  constructor(
    private modalCtrl: ModalController,
    private service: ProductoService
  ) { }

  ngOnInit() {
    if (this.producto) {
      this.isUpdate = true;
      this.data = this.producto;
    }
  }

  closeModal() {
    this.modalCtrl.dismiss(null, 'cerrado');
  }

  onSubmit(form: NgForm) {
    const producto = form.value;
    if (this.isUpdate) {
      this.service.update(producto, this.producto.id_producto).subscribe(() => {
        producto.id_producto = this.producto.id_producto;
        this.modalCtrl.dismiss(producto, 'actualizado');
      });
    }
    else {
      this.service.create(producto).subscribe(response => {
        this.modalCtrl.dismiss(response, 'creado');
      });
    }

  }

}
