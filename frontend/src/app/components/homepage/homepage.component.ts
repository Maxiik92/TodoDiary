import { Component, OnInit } from '@angular/core';
import { LocationInterface } from 'src/app/interfaces/location';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  location?: LocationInterface;
  weather?: any;

  constructor(
    private geoLocation: GeolocationService,
    private weatherService: WeatherService
  ) {}

  async ngOnInit() {
    this.location =
      (await this.geoLocation.getLocationData()) as unknown as LocationInterface;
    this.weather = await this.getWeather();
    console.log(this.weather);
  }

  async getWeather() {
    return await this.weatherService.getWeather(this.location!.city);
  }
  /*
  async getWeather(city: string) {
    const data = await this.weatherService
      .getWeather(city)
      .then((res: any) => {
        if (res.errorCode) {
          return 'Error in Get Weather Process! ' + res.message;
        }
        console.log(res);
        return res.location;
      })
      .catch((e) => {
        return 'Error in Get Weather Process! ' + e;
      });
    return data;
  }*/
}
