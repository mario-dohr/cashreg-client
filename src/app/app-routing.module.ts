import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelegDetailComponent } from './components/beleg-detail/beleg-detail.component';
import { BelegListComponent } from './components/beleg-list/beleg-list.component';
import { BelegeUploadComponent } from './components/belege-upload/belege-upload.component';
import { MainComponent } from './components/main/main.component';
import { MyLineChartComponent } from './components/my-line-chart/my-line-chart.component';

const routes: Routes = [
  { path: 'belege', component: BelegListComponent, pathMatch: 'full' },
  { path: 'belege/upload', component: BelegeUploadComponent, pathMatch: 'full' },
  { path: 'belege/charts', component: MyLineChartComponent, pathMatch: 'full' },
  { path: 'belege/:id', component: BelegDetailComponent, pathMatch: 'full' },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
