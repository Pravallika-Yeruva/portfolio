import { Component } from '@angular/core';

@Component({
  selector: 'app-habit-tracker-embed',
  template: `
    <main class="habit-tracker-embed">
      <iframe
        src="https://pravallika-yeruva.github.io/habit-tracker/"
        title="BrightSteps habit tracker"
        loading="eager"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
    }

    .habit-tracker-embed {
      min-height: 100vh;
      background: #f6f7f3;
    }

    iframe {
      display: block;
      width: 100%;
      height: 100vh;
      min-height: 40rem;
      border: 0;
    }

    @media (max-width: 600px) {
      iframe {
        min-height: 100vh;
      }
    }
  `,
})
export class HabitTrackerEmbedComponent {}
