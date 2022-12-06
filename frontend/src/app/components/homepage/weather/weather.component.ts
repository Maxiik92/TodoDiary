import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit, OnChanges {
  @Input() weather?: any;
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['weather'].currentValue);
  }
}
