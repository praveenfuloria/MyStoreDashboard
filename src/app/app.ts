import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreContainer } from './store/store-container/store-container';

@Component({
  imports: [RouterOutlet, StoreContainer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MyStoreDashboard');
}
