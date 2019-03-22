import { Component, OnInit } from '@angular/core';
import { Liste } from '../liste';

@Component({
  selector: 'app-list-swapi',
  templateUrl: './list-swapi.component.html',
  styleUrls: ['./list-swapi.component.css']
})
export class ListSwapiComponent implements OnInit {

  liste: Liste = {
    id: 1,
    name: 'un test'
  };

  constructor() { }

  ngOnInit() {
  }

}
