import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { PersonalService, Personal } from '../../services/personal.service';
import { PersonalModalPage } from 'src/app/personal-modal/personal-modal.page';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  [x: string]: any;

  personal2: Personal[];

  personal: any[];


  constructor(private modalCtrl: ModalController,
    private personalService: PersonalService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    this.getPersonal();

  }


  //metodo para recargar la lista de productos
  recargar(event) {
    setTimeout(() => {
      this.getPersonal();
      event.target.complete();
    }, 2000);
  }

  getPersonal() {
    this.personalService.getAll().subscribe(
      resp => {
        this.personal = resp;
        console.log(this.personal);
        // this.modalController.create({
        //   component: CardsListComponent,
        //   componentProps: { productos }
        // }).then(modal => modal.present()

        // );
      }, error => {
        console.log("no se pudo conectar al personal")
      }
    );
  }

  removePersonal(id_empleado: string) {
    this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Estas seguro de eliminar?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.personalService.remove(id_empleado).subscribe(() => {
            this.personal = this.personal.filter(std => std.id_empleado !== id_empleado);
          });
        }
      }, { text: 'No' }
      ]
    }).then(alertEl => alertEl.present());

  }




  addPersonal() {
    this.modalCtrl.create({
      component: PersonalModalPage
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

  updatePersonal(personal: Personal) {
    this.modalCtrl.create({
      component: PersonalModalPage,
      componentProps: { personal }
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