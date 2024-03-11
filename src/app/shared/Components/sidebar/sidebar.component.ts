import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['li{cursor: pointer;}'],
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
