import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  imports: [FaIconComponent],
  selector: 'app-about-me',
  styleUrl: './about-me.component.scss',
  templateUrl: './about-me.component.html',
})
export class AboutMe implements OnInit, OnDestroy {
  protected readonly typedText = signal('');
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;

  private readonly phrases = [
    'Angular Front-End Developer',
    'Passionate about modern web technologies',
    'Exploring full-stack development',
    'Open to new opportunities',
  ];
  private phraseIndex = 0;
  private characterIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.typeNextCharacter();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private typeNextCharacter(): void {
    const phrase = this.phrases[this.phraseIndex];

    if (this.deleting) {
      this.characterIndex--;
      this.typedText.set(phrase.slice(0, this.characterIndex));

      if (this.characterIndex === 0) {
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }
    } else {
      this.characterIndex++;
      this.typedText.set(phrase.slice(0, this.characterIndex));

      if (this.characterIndex === phrase.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.typeNextCharacter(), 1400);
        return;
      }
    }

    this.timer = setTimeout(() => this.typeNextCharacter(), this.deleting ? 45 : 85);
  }
}
