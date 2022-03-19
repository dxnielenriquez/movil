import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  user: FormGroup;
  focused: boolean[] = [];

  constructor(private userService: UserService, private formBuilder: FormBuilder,
    public alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.user = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  login(event: Event) {
    event.preventDefault();
    if (this.user.valid) {
      this.userService.login(this.user.value).subscribe(
        resp => {
          this.buildForm();
          this.router.navigateByUrl('home');
        }, error => {
          this.alert("Error en la inserción","Revisa la información e intentalo de nuevo");
        }
      )
    } else {
      this.alert("Falta información", "Llena todos los campos del formulario");
    }
  }

  async alert(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  onBlur(event: any, i: any) {
    const value = event.target.value;
    if (!value) {
      this.focused[i] = false;
    }
  }

}
