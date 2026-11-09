import { Component } from '@angular/core';
import { Education } from './components/education/education.component';
import { Experience } from './components/experience/experience.component';
import { AboutMe } from './components/about-me/about-me.component';
import { Interests } from './components/interests/interests.component';
import { Projects } from './components/projects/projects.component';
import { Footer } from './components/footer/footer.component';

@Component({
  imports: [AboutMe, Experience, Education, Projects, Interests, Footer],
  selector: 'app-portfolio',
  templateUrl: './app.component.html',
})
export class PortfolioComponent {}
