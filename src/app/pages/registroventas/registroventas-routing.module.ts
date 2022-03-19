import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroventasPage } from './registroventas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroventasPageRoutingModule { }
