import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { productoinfoPageRoutingModule } from './productoinfo-routing.module';

import { productoinfoPage } from './productoinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    productoinfoPageRoutingModule
  ],
  declarations: [productoinfoPage]
})
export class productoinfoPageModule { }
