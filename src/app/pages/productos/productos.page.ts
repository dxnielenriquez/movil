import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  [x: string]: any;

  productos: any;

  constructor(private modalController: ModalController,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    this.getProductos();
  }


  getProductos() {
    this.serviciosService.getAll().subscribe(
      resp => {
        this.productos = resp;
        console.log(this.productos);
        // this.modalController.create({
        //   component: CardsListComponent,
        //   componentProps: { productos }
        // }).then(modal => modal.present()

        // );
      }, error => {
        console.log("no se pudo conectar a los cupones")
      }
    );
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}
