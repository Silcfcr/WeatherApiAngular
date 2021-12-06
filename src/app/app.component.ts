import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetWeatherAPIService } from './get-weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  constructor(private _getWeather: GetWeatherAPIService,
    private _route: ActivatedRoute,
    private _router: Router) { }


  

}
