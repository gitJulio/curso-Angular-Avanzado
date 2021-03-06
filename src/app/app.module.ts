import { AppRoutingModulePages } from './pages/pages.routes';

import { RegisterComponent } from './login/register/register.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// import { PagesComponent } from './pages/pages.component';

import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // NopagefoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AppRoutingModulePages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
