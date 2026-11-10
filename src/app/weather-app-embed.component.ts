import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-weather-app-embed',
  template: `
    <main class="weather-app-embed">
      <iframe
        src="https://pravallika-yeruva.github.io/weather-app/"
        title="Weather App"
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

    .weather-app-embed {
      min-height: 100vh;
      background: #e9f2f5;
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
export class WeatherAppEmbedComponent implements OnDestroy {
  private readonly previousTitle: string;

  constructor(private readonly title: Title) {
    this.previousTitle = this.title.getTitle();
    this.title.setTitle('Weather App | Pravallika Yeruva');
  }

  ngOnDestroy(): void {
    this.title.setTitle(this.previousTitle);
  }
}
