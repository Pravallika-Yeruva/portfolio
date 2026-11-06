import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly typedText = signal('');

  private readonly phrases = [
    'am a Front-End Developer.',
    'love to learn new technologies.',
    'want to become a Python developer.',
    'am looking for new opportunities.',
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
