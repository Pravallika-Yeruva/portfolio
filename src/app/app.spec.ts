import { TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio sections', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-about-me h1')?.textContent).toContain("Hi, I'm Pravallika.");
    expect(compiled.querySelector('#experience')).toBeTruthy();
    expect(compiled.querySelector('#work')).toBeTruthy();
    expect(compiled.querySelector('#teaching')).toBeTruthy();
    expect(compiled.querySelector('#footer-cta')).toBeTruthy();
    expect(compiled.querySelector('#footer')).toBeTruthy();
  });
});
