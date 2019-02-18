import { Component, OnInit } from '@angular/core';

//You need to have at least a template or templateURL, the others are optional
@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  // selector: '.app-servers',
  template: `<app-server></app-server>
             <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
