import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Posts } from './posts/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Posts],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  posts = [
    {
      id: 1,
      user: 'John Doe',
      content: 'Just had an amazing lunch with my family!',
      comments: ['Sounds Fun', "I'm so Happy"],
    },
    {
      id: 2,
      user: 'Jane Doe',
      content: 'I am so excited to be here!',
      comments: ['I am excited too!', 'I am so excited'],
    },
  ];
}
