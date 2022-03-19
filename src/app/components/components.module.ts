import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardsComponent } from './cards/cards.component';
import { CardsSimplesComponent } from './cards-simples/cards-simples.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { InputComponent } from './input/input.component';
import { CardsPromocionesComponent } from './cards-promociones/cards-promociones.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardsComponent, CardsSimplesComponent, CardsListComponent, InputComponent, CardsPromocionesComponent],
  exports: [
    CardsComponent,
    CardsSimplesComponent,
    CardsListComponent,
    InputComponent,
    CardsPromocionesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
