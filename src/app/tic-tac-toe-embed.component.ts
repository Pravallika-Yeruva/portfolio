import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tic-tac-toe-embed',
  template: `
    <main class="tic-tac-toe-embed">
      <iframe
        src="https://pravallika-yeruva.github.io/tic-tac-toe/"
        title="Tic Tac Toe game"
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

    .tic-tac-toe-embed {
      min-height: 100vh;
      background: #f3f5f7;
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
export class TicTacToeEmbedComponent implements OnDestroy {
  private readonly previousTitle: string;
  private readonly favicon: HTMLLinkElement;
  private readonly previousFavicon: string | null;

  constructor(
    private readonly title: Title,
    @Inject(DOCUMENT) document: Document,
  ) {
    this.previousTitle = this.title.getTitle();
    this.favicon = this.getFavicon(document);
    this.previousFavicon = this.favicon.getAttribute('href');
    this.title.setTitle('Tic-Tac-Toe');
    this.favicon.href = '/tic-tac-toe-icon.svg';
  }

  ngOnDestroy(): void {
    this.title.setTitle(this.previousTitle);
    this.restoreFavicon();
  }

  private getFavicon(document: Document): HTMLLinkElement {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!favicon) {
      throw new Error('The document is missing its favicon link.');
    }

    return favicon;
  }

  private restoreFavicon(): void {
    if (this.previousFavicon === null) {
      this.favicon.removeAttribute('href');
      return;
    }

    this.favicon.setAttribute('href', this.previousFavicon);
  }
}
