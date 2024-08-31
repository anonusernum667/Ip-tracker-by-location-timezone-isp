import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UripComponent } from './urip/urip.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect to home
  { path: 'home', component: HomeComponent },
  {path: 'YourIpInfo', component: UripComponent},
  {path: 'Search', component: MainComponent}
];
