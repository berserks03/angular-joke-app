import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular joke app';
  jokes = [
    {
      question: 'What did the ocean say to the shore?',
      answer: 'Nothing. It just waved.',
      hidden: true,
    },
    {
      question: 'Why don’t clams give to charity?',
      answer: 'Because they’re shellfish!',
      hidden: true,
    },
    {
      question: 'What is a blue whale’s favourite James Bond Film?',
      answer: 'Licence to Krill.',
      hidden: true,
    },
    {
      question: 'Why does it take pirates so long to learn the alphabet?',
      answer: 'Because they spend years at C!',
      hidden: true,
    },
    {
      question: 'What did the wise papa fish tell his son?',
      answer: 'Keep your friends close and your anemones closer.',
      hidden: true,
    },
  ];

  addJoke(e: { question: string; answer: string; hidden: boolean }): void {
    this.jokes.push(e);
  }

  deleteJoke(e: number): void {
    this.jokes.splice(e, 1);
  }
}
