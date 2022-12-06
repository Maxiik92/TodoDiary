import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  ipUrl = 'http://api.ipify.org/?format=json';
  APIkey = environment.GEOLOCATION_API_KEY;
  geoUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${this.APIkey}&ip_address=`;
  ipAddress = '';

  constructor(private http: HttpClient) {}

  getIpAdress() {
    let response = this.http.get(this.ipUrl);
    return lastValueFrom(response);
  }

  getLocation(ipAddress: string) {
    const url = this.geoUrl + ipAddress;
    const response = this.http.get<JSON>(url);
    return lastValueFrom(response);
  }

  getLocationData() {
    const locationData = this.getIpAdress().then((res: any) => {
      const data = this.getLocation(res.ip).then((res) => {
        return res;
      });
      return data;
    });
    return locationData;
  }
}
