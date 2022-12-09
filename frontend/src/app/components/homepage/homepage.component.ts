import { Component, OnInit } from '@angular/core';
import { LocationInterface } from 'src/app/interfaces/location';
import { Weather } from 'src/app/interfaces/weather';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { NewsService } from 'src/app/services/news/news.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  location?: LocationInterface;
  weather?: any;
  news?: any;

  constructor(
    private geoLocation: GeolocationService,
    private weatherService: WeatherService,
    private newsService: NewsService
  ) {}

  async ngOnInit() {
    this.location =
      (await this.geoLocation.getLocationData()) as unknown as LocationInterface;
    this.weather = await this.getWeather();
    this.news = await this.getNewsByCountry();
  }

  async getWeather() {
    return await this.weatherService.getWeather(this.location!.city);
  }

  async getNewsByCountry() {
    return await this.newsService.getNewsByCountry(
      this.location!.country_code.toLowerCase()
    );
  }
}
