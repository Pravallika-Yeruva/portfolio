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
      name: 'TicTacToe',
      platform: 'Web',
      description: 'Play it. Win it. A fun game for adults and kids.',
    }
  ];
}
