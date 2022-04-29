import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";

export interface PeriodicElement {
  dateTime: string;
  name: string;
  phone: string;
  visitorType: string;
  visitorPurpose: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {dateTime: '11/03/22 2:35pm', name: 'Enoch Kyereh Preprah', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'Report Crime'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Bismark Kwaku Gyamfi', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'News Interview'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Enoch Kyereh Preprah', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'Report Crime'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Bismark Kwaku Gyamfi', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'News Interview'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Enoch Kyereh Preprah', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'Report Crime'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Bismark Kwaku Gyamfi', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'News Interview'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Enoch Kyereh Preprah', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'Report Crime'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Bismark Kwaku Gyamfi', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'News Interview'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Enoch Kyereh Preprah', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'Report Crime'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Bismark Kwaku Gyamfi', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'News Interview'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Enoch Kyereh Preprah', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'Report Crime'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Bismark Kwaku Gyamfi', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'News Interview'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Enoch Kyereh Preprah', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'Report Crime'}, 
  {dateTime: '11/03/22 2:35pm', name: 'Bismark Kwaku Gyamfi', phone: '0243617890', visitorType: 'Reporter',visitorPurpose:'News Interview'}, 


];

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  displayedColumns: string[] = ['dateTime', 'name', 'phone', 'visitorType','visitorPurpose'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
    SidebarComponent.menuIconsVisible = true;
  }

}
