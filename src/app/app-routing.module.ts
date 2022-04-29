import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { VisitorComponent } from "./pages/visitor/visitor.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent 
  },
  { path: 'visitor', component: VisitorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
