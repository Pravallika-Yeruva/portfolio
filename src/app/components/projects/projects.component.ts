import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.component.scss',
  templateUrl: './projects.component.html',
})
export class Projects {
  protected readonly projects = [
    {
      name: 'Tic Tac Toe',
      platform: 'Web',
      description: 'Play it. Win it. A fun game for adults and kids.',
      image: '/tic-tac-toe-preview.svg',
      href: '#/tic-tac-toe',
    },
    {
      name: 'BrightSteps',
      platform: 'Web',
      description: 'A friendly space for kids and adults to build routines, one small step at a time.',
      image: '/habit-tracker-preview.svg',
      href: '#/habit-tracker',
    },
  ];
}
