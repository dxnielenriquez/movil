import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit() {}

}
