import { Component } from '@angular/core';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Interests } from './sections/interests/interests';
import { Projects } from './sections/projects/projects';
import { SiteFooter } from './sections/site-footer/site-footer';

@Component({
  imports: [Hero, Experience, Projects, Interests, Contact, SiteFooter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
