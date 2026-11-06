import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = [
    {
      name: 'TicTacToe',
      platform: 'Web',
      description: 'Play it. Win it. A fun game for adults and kids.',
    },
    {
      name: 'Disney+ Clone',
      platform: 'Web',
      description:
        'A streaming service clone inspired by Disney, Pixar, Marvel, Star Wars, and National Geographic.',
    },
  ];
}
