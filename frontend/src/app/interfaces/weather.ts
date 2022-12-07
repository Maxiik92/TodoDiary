export interface Day {
  date: string;
  temperature: string;
  condition: string;
}

export class Weather {
  city: string;
  days: Day[] = [];

  constructor(data: any) {
    const city = Object.keys(data.locations)[0];
    this.city = city;
    console.log(city);
    for (let i: number = 0; i < 5; i++) {
      let day: Day = { date: '', temperature: '', condition: '' };
      day.date = data.locations[city].values[i].datetimeStr;
      day.temperature = data.locations[city].values[i].temp;
      day.condition = data.locations[city].values[i].conditions;
      this.days!.push(day);
    }
  }
}
