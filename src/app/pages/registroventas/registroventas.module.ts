import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroventasPageRoutingModule } from './registroventas-routing.module';

import { RegistroventasPage } from './registroventas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroventasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroventasPage]
})
export class RegistroventasPageModule { }
