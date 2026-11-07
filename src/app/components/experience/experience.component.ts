import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.component.scss',
  templateUrl: './experience.component.html',
})
export class Experience {
  protected readonly summary =
    'Results-driven Senior Front-End Developer with over 8 years of experience delivering scalable, high-performance web applications across enterprise environments. Proven expertise in JavaScript and Angular 18+, with foundational knowledge of TypeScript and exposure to modern frameworks including React and Vue.js. Skilled in translating complex business requirements into robust, maintainable, user-centric solutions while following industry best practices. Recognized for strong collaboration, code quality advocacy, and effective partnership with cross-functional, globally distributed engineering teams.';

  protected readonly skillGroups = [
    {
      title: 'Frontend Development',
      skills: [
        'Angular 18+',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'SCSS',
        'Responsive Design',
        'UI Development',
        'UI/UX Collaboration',
      ],
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'PHP', 'REST API Integration', 'GraphQL (Beginner)', 'JSON', 'XML'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'State Management & Testing',
      skills: ['NgRx Store', 'Jest', 'Cypress (E2E)'],
    },
    {
      title: 'Tools & Methodologies',
      skills: [
        'LaunchDarkly',
        'Jira',
        'GitHub',
        'GitLab',
        'SVN',
        'Figma (Auto Layout)',
        'Agile/Scrum',
      ],
    },
    {
      title: 'AI & Foundational Knowledge',
      skills: ['GitHub Copilot', 'React', 'Vue.js', 'TypeScript Architecture', 'Python', 'Claude AI'],
    },
  ];

  protected readonly jobs = [
    {
      company: 'CVS Health',
      role: 'Angular Front-End UI Developer',
      dates: 'Sep 2021 – Mar 2026',
      highlights: [
        'Built and shipped responsive Angular (v14–17) applications using TypeScript, RxJS, HTML5, SCSS, and CSS3, delivering cross-browser and cross-device compatibility across 8+ production apps serving 150K+ users.',
        'Implemented NgRx Store state management with Actions, Reducers, Effects, and Selectors, reducing redundant API calls and state-related bugs by 35% across a multi-module Angular workspace.',
        'Designed a reusable Digital Blocks component library for dashboards, onboarding flows, and notifications. Adopted by 6 internal teams, it cut new-feature development time by 40%.',
        'Engineered a design-token architecture for automated, on-brand theming across 22+ brand identities from one Angular codebase, reducing per-brand styling overhead by 60%.',
        'Integrated Angular front ends with Node.js/Express REST APIs and internal i90 services, implementing secure authentication and error handling to improve data exchange across 10+ downstream applications.',
        'Used GitHub Copilot to refactor complex NgRx logic, generate Jest tests, and identify edge cases, helping raise code coverage to 85% and accelerate PR turnaround by 30%.',
        'Established Jest unit and Cypress end-to-end testing in CI/CD pipelines, reducing production defects by 45%.',
        'Managed progressive feature rollouts and A/B testing with LaunchDarkly, enabling zero-downtime releases across 5 concurrent brand experiences.',
        'Translated Figma wireframes into pixel-perfect, accessible UI and partnered with design and backend teams to reduce design-to-development rework by 25%.',
        'Owned complex workflows end-to-end, including the BrandingUiConfigurationComponent and its Node.js/MongoDB publishing pipeline, cutting publishing errors by 50%.',
      ],
    },
    {
      company: 'NQC Limited',
      role: 'Full-Stack Developer',
      dates: 'Dec 2015 – Mar 2020',
      highlights: [
        'Designed and engineered supply chain risk management applications for public/private sector clients including UK Home Office and UK Ministry of Defense.',
        'Built dynamic risk-assessment questionnaire engines using XML schemas and PHP scoring logic.',
        'Redesigned and maintained the corporate website, nqc.com, using responsive web design practices to support cross-browser compatibility and reliable performance across mobile and desktop devices. ',
        'Developed custom PDF report generation engines utilizing PHP template tags to deliver automated buyer/supplier analytics.',
        'Managed code versioning using SVN and tracked defects and sprints in JIRA.'
      ],
    },
    {
      company: 'Chenrezig Center',
      role: 'Developer & Administrative Coordinator',
      dates: 'Jan 2014 – Nov 2015',
      highlights: [
        'Work on assigning schedules to volunteers on the Festival security setup.',
        'Communication through email to all active members and volunteers of the center.',
        'Developed an Excel scheduling algorithm to optimize volunteer timelines and event security coverage.',
        'Maintained the center website using HTML and CSS while managing digital communications.',
      ],
    },
  ];
}
