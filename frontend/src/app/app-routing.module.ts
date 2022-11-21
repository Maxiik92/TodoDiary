import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: NavPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
