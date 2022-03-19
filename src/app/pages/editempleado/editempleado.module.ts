import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditempleadoPageRoutingModule } from './editempleado-routing.module';

import { EditempleadoPage } from './editempleado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditempleadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditempleadoPage]
})
export class EditempleadoPageModule {}
