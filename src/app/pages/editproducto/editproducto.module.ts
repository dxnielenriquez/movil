import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditproductoPageRoutingModule } from './editproducto-routing.module';

import { EditproductoPage } from './editproducto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditproductoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditproductoPage]
})
export class EditproductoPageModule { }
