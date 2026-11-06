import { Component } from '@angular/core';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { AboutMe } from './sections/about-me/about-me';
import { Interests } from './sections/interests/interests';
import { Projects } from './sections/projects/projects';
import { SiteFooter } from './sections/site-footer/site-footer';

@Component({
  imports: [AboutMe, Experience, Projects, Interests, Contact, SiteFooter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
