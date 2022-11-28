import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BelegListComponent } from './components/beleg-list/beleg-list.component';
import { MainComponent } from './components/main/main.component';
import { BelegDetailComponent } from './components/beleg-detail/beleg-detail.component';
import { BelegeUploadComponent } from './components/belege-upload/belege-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsComponent } from './components/charts/charts.component';
import { MyLineChartComponent } from './components/my-line-chart/my-line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    BelegListComponent,
    MainComponent,
    BelegDetailComponent,
    BelegeUploadComponent,
    ChartsComponent,
    MyLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
