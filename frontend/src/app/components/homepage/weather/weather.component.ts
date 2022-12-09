import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() weather?: any;
  weatherAvailable = false;
  weatherData?: Weather;
  test = false;
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['weather'].currentValue);
    if (changes['weather'].currentValue !== undefined) {
      this.showWeather();
      console.log(this.weatherData);
    }
  }

  showWeather() {
    this.weatherAvailable = true;
    this.weatherData = new Weather(this.weather);
  }
}
