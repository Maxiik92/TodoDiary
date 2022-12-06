import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { lastValueFrom } from 'rxjs';
import { IpInterface, LocationInterface } from 'src/app/interfaces/location';

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

  async getLocationData() {
    const jsonRes: Object = await this.getIpAdress();
    const res = jsonRes as IpInterface;
    try {
      const res_1: Object = await this.getLocation(res.ip);
      const data = res_1 as LocationInterface;
      return data;
    } catch (e) {
      const msg = 'Error occured in GeoLocation process! ';
      return { msg: msg + e };
    }
  }
}
