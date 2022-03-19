import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { IniciarSesionPageRoutingModule } from './iniciar-sesion-routing.module';

import { IniciarSesionPage } from './iniciar-sesion.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarSesionPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [IniciarSesionPage]
})
export class IniciarSesionPageModule {}
