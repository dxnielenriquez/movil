import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarempresaPageRoutingModule } from './editarempresa-routing.module';

import { EditarempresaPage } from './editarempresa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarempresaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarempresaPage]
})
export class EditarempresaPageModule {}
