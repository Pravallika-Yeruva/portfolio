import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-hero h1')?.textContent).toContain("Hi, I'm Pravallika.");
    expect(compiled.querySelector('#experience')).toBeTruthy();
    expect(compiled.querySelector('#work')).toBeTruthy();
    expect(compiled.querySelector('#teaching')).toBeTruthy();
    expect(compiled.querySelector('#footer-cta')).toBeTruthy();
    expect(compiled.querySelector('#footer')).toBeTruthy();
  });
});
