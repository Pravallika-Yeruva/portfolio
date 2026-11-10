import { Component, OnDestroy } from '@angular/core';
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

  constructor(private readonly title: Title) {
    this.previousTitle = this.title.getTitle();
    this.title.setTitle('Tic Tac Toe | Pravallika Yeruva');
  }

  ngOnDestroy(): void {
    this.title.setTitle(this.previousTitle);
  }
}
