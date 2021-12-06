import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetWeatherAPIService } from './get-weather-api.service';
import { CityComponent } from './city/city.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  // exports: [
  //   AppRoutingModule
  // ],
  providers: [GetWeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
