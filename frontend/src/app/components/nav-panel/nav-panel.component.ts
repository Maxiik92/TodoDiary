import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';

@Component({
  selector: 'nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css'],
})
export class NavPanelComponent implements OnInit {
  userName = 'DefaultUser';
  location = {};

  constructor(private geoLocation: GeolocationService) {}

  async ngOnInit() {
    this.location = await this.geoLocation.getLocationData();
    console.log(this.location);
  }
}
