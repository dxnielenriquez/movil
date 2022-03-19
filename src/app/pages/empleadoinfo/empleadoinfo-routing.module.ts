import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoinfoPage } from './empleadoinfo.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadoinfoPageRoutingModule {}
