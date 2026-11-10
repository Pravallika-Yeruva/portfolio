import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
export class HabitTrackerEmbedComponent implements OnDestroy {
  private readonly previousTitle: string;
  private readonly iconLink: HTMLLinkElement | null;
  private readonly previousIconHref: string | null;
  private readonly previousIconType: string | null;

  constructor(
    private readonly title: Title,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.previousTitle = this.title.getTitle();
    this.title.setTitle('HabitTracker - BrightSteps');

    this.iconLink = this.document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
    this.previousIconHref = this.iconLink?.getAttribute('href') ?? null;
    this.previousIconType = this.iconLink?.getAttribute('type') ?? null;
    this.iconLink?.setAttribute('href', '/brightsteps-icon.svg');
    this.iconLink?.setAttribute('type', 'image/svg+xml');
  }

  ngOnDestroy(): void {
    this.title.setTitle(this.previousTitle);
    if (this.iconLink) {
      if (this.previousIconHref === null) {
        this.iconLink.removeAttribute('href');
      } else {
        this.iconLink.setAttribute('href', this.previousIconHref);
      }

      if (this.previousIconType === null) {
        this.iconLink.removeAttribute('type');
      } else {
        this.iconLink.setAttribute('type', this.previousIconType);
      }
    }
  }
}
