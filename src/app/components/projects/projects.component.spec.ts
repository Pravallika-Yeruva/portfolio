import { TestBed } from '@angular/core/testing';
import { Projects } from './projects.component';

describe('Projects', () => {
  it('shows the Weather App tile linking to its embedded route', async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector(
      'a[href="#/weather-app"]',
    ) as HTMLAnchorElement | null;

    expect(link).not.toBeNull();
    expect(link?.target).toBe('_blank');
    expect(link?.rel).toContain('noopener');
    expect(link?.getAttribute('aria-label')).toBe('Open Weather App in a new tab');
  });
});
