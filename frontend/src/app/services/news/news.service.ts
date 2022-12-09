import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private API_KEY = environment.NEWS_API_KEY;

  constructor(private http: HttpClient) {}

  getNewsByCountry(country: string) {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.API_KEY}`;
    const response = this.http.get<JSON>(url);
    const data: Object = lastValueFrom(response);
    return data;
  }
}
