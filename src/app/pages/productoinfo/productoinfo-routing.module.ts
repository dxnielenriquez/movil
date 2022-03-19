import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { productoinfoPage } from './productoinfo.page';

const routes: Routes = [
  {
    path: '',
    component: productoinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class productoinfoPageRoutingModule { }
