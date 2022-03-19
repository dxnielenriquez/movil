import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroqrPage } from './registroqr.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroqrPageRoutingModule { }
