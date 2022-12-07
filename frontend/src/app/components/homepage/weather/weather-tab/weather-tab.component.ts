import { Component, Input } from '@angular/core';
import { Day } from 'src/app/interfaces/weather';

@Component({
  selector: 'weather-tab',
  templateUrl: './weather-tab.component.html',
  styleUrls: ['./weather-tab.component.css'],
})
export class WeatherTabComponent {
  @Input() day!: Day;
}
