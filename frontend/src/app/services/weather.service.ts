import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  API_KEY = environment.WEATHER_API_KEY;
  url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?&aggregateHours=24&unitGroup=metric&shortColumnNames=false&contentType=json&iconSet=icons1&key=${this.API_KEY}&locations=`;
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const response = this.http.get<JSON>(this.url + city);
    const data: Object = lastValueFrom(response);
    return data;
  }
}
