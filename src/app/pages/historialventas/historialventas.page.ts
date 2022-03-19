import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialventas',
  templateUrl: './historialventas.page.html',
  styleUrls: ['./historialventas.page.scss'],
})
export class HistorialventasPage implements OnInit {


  valueSelected: string = "inicio";

  segmentChanged(event: CustomEvent) {
    this.valueSelected = event.detail.value;

  }
  constructor() { }

  ngOnInit() {
  }



}
