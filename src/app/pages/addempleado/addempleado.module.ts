import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddempleadoPageRoutingModule } from './addempleado-routing.module';

import { AddempleadoPage } from './addempleado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddempleadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddempleadoPage]
})
export class AddempleadoPageModule {}
