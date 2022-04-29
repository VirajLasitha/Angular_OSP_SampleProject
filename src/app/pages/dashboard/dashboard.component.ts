import { Component, OnInit,VERSION, ViewChild } from '@angular/core';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mybreakpoint: number | undefined;

  constructor() { }


  ngOnInit(): void {
    this.mybreakpoint = (window.innerWidth <= 1000) ? 1 : 3;
    SidebarComponent.menuIconsVisible = false;
  }

  handleSize(event:any) {
    this.mybreakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    }

}
