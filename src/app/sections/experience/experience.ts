import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly groups = [
    { icon: 'fi-laptop', title: 'Front-end', skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'] },
    { icon: 'fi-database', title: 'Back-end', skills: ['PHP', 'MySQL'] },
    { icon: 'fi-star', title: 'Tools', skills: ['Vim', 'SVN', 'VS Code'] },
  ];
}
