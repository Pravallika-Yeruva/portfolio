import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HabitTrackerEmbedComponent } from './habit-tracker-embed.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'habit-tracker', component: HabitTrackerEmbedComponent },
  { path: '**', redirectTo: '' },
];
