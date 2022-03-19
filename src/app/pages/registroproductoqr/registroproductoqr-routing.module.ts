import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroproductoqrPage } from './registroproductoqr.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroproductoqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroproductoqrPageRoutingModule { }
