import { TestBed } from '@angular/core/testing';
import { TicTacToeEmbedComponent } from './tic-tac-toe-embed.component';
import { WeatherAppEmbedComponent } from './weather-app-embed.component';

describe('embedded app tab identity', () => {
  let favicon: HTMLLinkElement;

  beforeEach(async () => {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/favicon.ico';
    document.head.append(favicon);
    document.title = 'Portfolio | Test';

    await TestBed.configureTestingModule({
      imports: [TicTacToeEmbedComponent, WeatherAppEmbedComponent],
    }).compileComponents();
  });

  afterEach(() => {
    favicon.remove();
  });

  it('sets and restores the weather app title and icon', () => {
    const fixture = TestBed.createComponent(WeatherAppEmbedComponent);
    fixture.detectChanges();

    expect(document.title).toBe('Weather App');
    expect(favicon.getAttribute('href')).toBe('/weather-app-icon.svg');

    fixture.destroy();
    expect(document.title).toBe('Portfolio | Test');
    expect(favicon.getAttribute('href')).toBe('/favicon.ico');
  });

  it('sets and restores the tic-tac-toe title and icon', () => {
    const fixture = TestBed.createComponent(TicTacToeEmbedComponent);
    fixture.detectChanges();

    expect(document.title).toBe('Tic-Tac-Toe');
    expect(favicon.getAttribute('href')).toBe('/tic-tac-toe-icon.svg');

    fixture.destroy();
    expect(document.title).toBe('Portfolio | Test');
    expect(favicon.getAttribute('href')).toBe('/favicon.ico');
  });
});
