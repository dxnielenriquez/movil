import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalisisventasPageRoutingModule } from './analisisventas-routing.module';

import { AnalisisventasPage } from './analisisventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalisisventasPageRoutingModule
  ],
  declarations: [AnalisisventasPage]
})
export class AnalisisventasPageModule { }
