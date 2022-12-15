import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { HomepageComponent } from './components/homepage/homepage.component';
import { WeatherComponent } from './components/homepage/weather/weather.component';
import { WeatherTabComponent } from './components/homepage/weather/weather-tab/weather-tab.component';
import { NewsComponent } from './components/homepage/news/news.component';
import { NewstabComponent } from './components/homepage/news/newstab/newstab.component';
import { HometaskpanelComponent } from './components/homepage/hometaskpanel/hometaskpanel.component';
import { RegisterComponent } from './components/landing-page/register/register.component';
import { LoginComponent } from './components/landing-page/login/login.component';

//material.io imports
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    LandingPageComponent,
    HomepageComponent,
    WeatherComponent,
    NewsComponent,
    WeatherTabComponent,
    HometaskpanelComponent,
    NewstabComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
