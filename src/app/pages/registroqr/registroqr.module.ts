import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroqrPageRoutingModule } from './registroqr-routing.module';

import { RegistroqrPage } from './registroqr.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroqrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroqrPage]
})
export class RegistroqrPageModule { }
