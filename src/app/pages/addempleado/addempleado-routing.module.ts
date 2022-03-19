import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddempleadoPage } from './addempleado.page';

const routes: Routes = [
  {
    path: '',
    component: AddempleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddempleadoPageRoutingModule {}
