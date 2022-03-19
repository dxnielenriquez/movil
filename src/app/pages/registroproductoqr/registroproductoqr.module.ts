import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroproductoqrPageRoutingModule } from './registroproductoqr-routing.module';

import { RegistroproductoqrPage } from './registroproductoqr.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroproductoqrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroproductoqrPage]
})
export class RegistroproductoqrPageModule { }
