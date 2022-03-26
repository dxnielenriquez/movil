import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ProductoService, Producto } from '../../services/producto.service';
import { ProductoModalPage } from 'src/app/producto-modal/producto-modal.page';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  [x: string]: any;

  productos2: Producto[];

  productos: any[];


  constructor(private modalCtrl: ModalController,
    private productoService: ProductoService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    this.getProductos();

  }


  //metodo para recargar la lista de productos
  recargar(event) {
    setTimeout(() => {
      this.getProductos();
      event.target.complete();
    }, 2000);
  }
  getProductos() {
    this.productoService.getAll().subscribe(
      resp => {
        this.productos = resp;
        console.log(this.productos);
        // this.modalController.create({
        //   component: CardsListComponent,
        //   componentProps: { productos }
        // }).then(modal => modal.present()

        // );
      }, error => {
        console.log("no se pudo conectar a los productos")
      }
    );
  }

  removeProducto(id_producto: string) {
    this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Estas seguro de eliminar?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.productoService.remove(id_producto).subscribe(() => {
            this.productos = this.productos.filter(std => std.id_producto !== id_producto);
          });
        }
      }, { text: 'No' }
      ]
    }).then(alertEl => alertEl.present());

  }




  addProducto() {
    this.modalCtrl.create({
      component: ProductoModalPage
    }).then(modal => {
      modal.present();

      return modal.onDidDismiss();
    })
      .then(({ data, role }) => {
        if (role == "creado") {
          //   this.productos.push(data); 
        }
      }
      );
  }

  updateProducto(producto: Producto) {
    this.modalCtrl.create({
      component: ProductoModalPage,
      componentProps: { producto }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }
      /* ).then(({ data, role }) => {
        this.productos2 = this.productos2.filter(std => {
          console.log(std);
          if (data.id_producto === std.id_producto) {
            return data;
          }
          return std;
        }); */
    );


  }



}