import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valueSelected: string = "inicio";

  segmentChanged(event: CustomEvent) {
    this.valueSelected = event.detail.value;
    console.log(event.detail.value);


  }





}
