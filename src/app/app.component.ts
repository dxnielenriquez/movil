import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Perfil', url: '/perfil', icon: 'person-outline' },
    { title: 'Empresa', url: '/empresa', icon: 'reader-outline' },
    { title: 'Personal', url: '/personal', icon: 'reader-outline' },
    { title: 'Productos', url: '/productos', icon: 'reader-outline' },
    { title: 'Cerrar sesión', url: '/login', icon: 'exit-outline' },
  ];
  constructor() { }
}
