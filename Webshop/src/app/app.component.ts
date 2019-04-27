import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-customers></app-customers>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() { }
  ngOnInit() {

  }
}
