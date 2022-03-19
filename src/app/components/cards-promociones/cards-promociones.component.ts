import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-promociones',
  templateUrl: './cards-promociones.component.html',
  styleUrls: ['./cards-promociones.component.scss'],
})
export class CardsPromocionesComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit() {}

}
