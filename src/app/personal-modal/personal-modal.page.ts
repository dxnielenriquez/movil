import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Personal, PersonalService } from 'src/app/services/personal.service';
@Component({
  selector: 'app-user-modal',
  templateUrl: './personal-modal.page.html',
  styleUrls: ['./personal-modal.page.scss'],
})
export class PersonalModalPage implements OnInit {

  @Input() personal: Personal;
  isUpdate = false;
  data = {
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    telefono: '',
    correo: '',
    sueldo: '',
    id_empresa: ''
  };

  constructor(
    private modalCtrl: ModalController,
    private service: PersonalService
  ) { }

  ngOnInit() {
    if (this.personal) {
      this.isUpdate = true;
      this.data = this.personal;
    }
  }

  closeModal() {
    this.modalCtrl.dismiss(null, 'cerrado');
  }

  onSubmit(form: NgForm) {
    const personal = form.value;
    if (this.isUpdate) {
      this.service.update(personal, this.personal.id_empleado).subscribe(() => {
        personal.id_empleado = this.personal.id_empleado;
        this.modalCtrl.dismiss(personal, 'actualizado');
      });
    }
    else {
      this.service.create(personal).subscribe(response => {
        this.modalCtrl.dismiss(response, 'creado');
      });
    }

  }

}
