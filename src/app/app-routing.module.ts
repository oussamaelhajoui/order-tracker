import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './pages/details/details.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: DashboardComponent },
      { path: 'details/:stage', component: DetailsComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
