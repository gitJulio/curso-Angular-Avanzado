import { AppRoutingModulePages } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations:[
    ProgressComponent,
    Graficas1Component,
    DashboardComponent,
    PagesComponent
  ],
  exports:[
    ProgressComponent,
    Graficas1Component,
    DashboardComponent,
    PagesComponent
  ],
  imports:[
    SharedModule,
    AppRoutingModulePages
  ]
})

export class PagesModule{}
