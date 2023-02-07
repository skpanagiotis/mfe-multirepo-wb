import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, CommonModule, MatTableModule, MatPaginatorModule],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent, DashboardComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('app-project-one', element);

    const element_dashboard = createCustomElement(DashboardComponent, {
      injector: this.injector,
    });
    customElements.define('app-project-one-dashboard', element_dashboard);
  }
}
