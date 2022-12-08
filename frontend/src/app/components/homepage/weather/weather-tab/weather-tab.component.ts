import { Component, Input } from '@angular/core';
import { Day } from 'src/app/interfaces/weather';

@Component({
  selector: 'weather-tab',
  templateUrl: './weather-tab.component.html',
  styleUrls: ['./weather-tab.component.css'],
})
export class WeatherTabComponent {
  @Input() day!: Day;

  dayFormatter(date: string): string[] {
    const today = new Date().toISOString().split('T')[0];
    const day = date.split('T')[0];
    if (day == today) {
      return ['Today'];
    }
    return [
      new Date(day).toDateString().slice(0, 3),
      new Date(day).toDateString().slice(3),
    ];
  }
}
