import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <!-- Navigation : liens de routage vers les pages -->
    <nav class="nav">
      <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
      <a routerLink="/about" routerLinkActive="active">À propos</a>
    </nav>

    <!-- RouterOutlet : emplacement où Angular affiche la page active -->
    <router-outlet />
  `,
  styles: `
    .nav {
      display: flex;
      gap: 16px;
      justify-content: center;
      padding: 16px;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
    }
    .nav a {
      text-decoration: none;
      color: #667eea;
      font-weight: 600;
      padding: 6px 16px;
      border-radius: 20px;
    }
    .nav a:hover {
      background: rgba(102, 126, 234, 0.15);
    }
    .nav a.active {
      background: #667eea;
      color: white;
    }
  `
})
export class App {
  protected readonly title = signal('mon-portfolio');
}
