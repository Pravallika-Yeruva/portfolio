import { Component } from '@angular/core';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { AboutMe } from './sections/about-me/about-me';
import { Interests } from './sections/interests/interests';
import { Projects } from './sections/projects/projects';
import { Footer } from './sections/footer/footer';

@Component({
  imports: [AboutMe, Experience, Education, Projects, Interests, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
