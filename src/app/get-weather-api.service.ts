import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetWeatherAPIService {

  constructor(private _http: HttpClient) { }

  getCity(city: string) {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fec836b7f5d298d9e5799d8cbec47cee`);
  }
}
