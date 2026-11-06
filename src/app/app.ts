import { Component } from '@angular/core';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { AboutMe } from './sections/about-me/about-me';
import { Interests } from './sections/interests/interests';
import { Projects } from './sections/projects/projects';
import { Footer } from './sections/footer/footer';

@Component({
  imports: [AboutMe, Experience, Projects, Interests, Contact, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
