import { Component, signal } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navigation, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
