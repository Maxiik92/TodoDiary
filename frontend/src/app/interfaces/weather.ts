export interface Day {
  date: string;
  temperature: string;
  condition: string;
  icon: string;
}

export class Weather {
  city: string;
  days: Day[] = [];

  constructor(data: any) {
    const city = Object.keys(data.locations)[0];
    this.city = city;
    console.log(city);
    for (let i: number = 0; i < 6; i++) {
      let day: Day = { date: '', temperature: '', condition: '', icon: '' };
      const startPoint = data.locations[city].values[i];
      day.date = startPoint.datetimeStr;
      day.temperature = startPoint.temp;
      day.condition = startPoint.conditions;
      day.icon =
        '../../../../../assets/weather-icons/' + startPoint.icon + '.svg';
      this.days.push(day);
    }
  }
}
