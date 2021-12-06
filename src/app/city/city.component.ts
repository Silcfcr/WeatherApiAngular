import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GetWeatherAPIService } from '../get-weather-api.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: any;
  imageUrl: any = "";

  constructor(private _getWeather: GetWeatherAPIService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.city = params['city'];
      this.fetchCity(this.city);
      this.getImage(this.city);
    });

  }
  fetchCity(city: string) {
    console.log(city);
    let Observable = this._getWeather.getCity(city);
    Observable.subscribe((data: any) => {
      console.log(data);
      this.city = data;
    });
  }

  getImage(city: string) {
    if (city === "Seattle") {
      this.imageUrl = "https://cdn.getyourguide.com/img/location/5cab5a032be9d.jpeg/88.jpg"
    } else if (city === "Burbank") {
      this.imageUrl = "https://mediaim.expedia.com/destination/1/bdb02cb4d8a97a4abd516e708fae2d8c.jpg?impolicy=fcrop&w=536&h=384&q=high"
    } else if (city === "San Jose") {
      this.imageUrl = "https://media.timeout.com/images/105241381/image.jpg"
    } else if (city === "Dallas") {
      this.imageUrl = "https://www.adonde-y-cuando.es/site/images/illustration/dallas-texas_385.jpg"
    } else if (city === "Washington") {
      this.imageUrl = "https://lovingnewyork.es/wp-content/uploads/2019/10/que-ver-en-washington-190918163509006-1600x960.jpg"
    } else if (city === "Chicago") {
      this.imageUrl = "https://www.urban-hub.com/wp/wp-content/uploads/2020/03/Chicago_City_Keyvisual_Teaser.jpg"
    }
  }
}
