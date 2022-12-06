import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';

@Component({
  selector: 'nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css'],
})
export class NavPanelComponent {
  userName = 'DefaultUser';
}
