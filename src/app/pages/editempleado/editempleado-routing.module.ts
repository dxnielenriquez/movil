import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditempleadoPage } from './editempleado.page';

const routes: Routes = [
  {
    path: '',
    component: EditempleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditempleadoPageRoutingModule {}
