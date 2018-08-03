import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  sidebarItems = [];

  constructor() {
    this.sidebarItems = [
      {
        title: "Home",
        link: "/home",
        active: true
      },
      {
        title: "Analysis",
        link: "/analysis",
        active: false
      },
      {
        title: "Profile",
        link: "/profile",
        active: false
      }
    ];
  }

  ngOnInit() {
  }

}
