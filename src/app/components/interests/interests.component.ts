import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-interests',
  styleUrl: './interests.component.scss',
  templateUrl: './interests.component.html',
})
export class Interests {
  protected readonly interests = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node.js',
    'React',
    'Programming',
    'Python',
    'ember.js',
    'Go',
    'AWS',
    'MySQL',
    'GitHub',
    'Copilot',
    'Claude',
    'Music',
    'Socializing',
  ];
}
