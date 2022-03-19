import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalisisventasPage } from './analisisventas.page';

const routes: Routes = [
  {
    path: '',
    component: AnalisisventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalisisventasPageRoutingModule { }
