import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { HabitTrackerEmbedComponent } from './habit-tracker-embed.component';
import { TicTacToeEmbedComponent } from './tic-tac-toe-embed.component';
import { WeatherAppEmbedComponent } from './weather-app-embed.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'tic-tac-toe', component: TicTacToeEmbedComponent },
  { path: 'habit-tracker', component: HabitTrackerEmbedComponent },
  { path: 'weather-app', component: WeatherAppEmbedComponent },
  { path: '**', redirectTo: '' },
];
