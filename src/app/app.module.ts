import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbListModule,
  NbIconModule, NbInputModule, NbWindowModule,
  NbDatepickerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { InsertOrderComponent } from './components/insert-order/insert-order.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, CardListComponent, InsertOrderComponent, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NbThemeModule.forRoot({ name: 'dark' }),
    NbWindowModule.forRoot(),

    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
