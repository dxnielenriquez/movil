import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
      usuario: ['', [Validators.required, Validators.maxLength(30)]],
      contrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmContrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      empresa: ['', [Validators.required]],
    });
  }

  register(event: Event) {
    event.preventDefault();
    console.log(this.user);
    if (this.user.valid) {
      this.userService.register(this.user.value).subscribe(
        resp => {
          this.buildForm();
          this.router.navigateByUrl('login');
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
