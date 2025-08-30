import { Component, signal } from '@angular/core';
import { Header } from './shared/layout/header/header';
import { Sidebar } from './shared/layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fund-management');
}
