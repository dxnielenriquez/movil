import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadoinfoPageRoutingModule } from './empleadoinfo-routing.module';

import { EmpleadoinfoPage } from './empleadoinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadoinfoPageRoutingModule
  ],
  declarations: [EmpleadoinfoPage]
})
export class EmpleadoinfoPageModule {}
