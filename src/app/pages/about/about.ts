import { Component } from '@angular/core';

// Deuxième page du portfolio, accessible via la route /about
// Concept : ROUTING (une route mène vers ce composant)
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container">
      <div class="card">
        <h1>À propos</h1>
        <p>
          Ce portfolio est construit avec <strong>Angular</strong> dans le cadre de la formation
          10.000 Codeurs. Cette page démontre l'utilisation du <strong>Routing</strong> pour naviguer
          entre plusieurs pages d'une application.
        </p>
        <a class="back" routerLink="/home">&#8592; Retour à l'accueil</a>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .card {
      background: white;
      border-radius: 16px;
      padding: 40px;
      text-align: center;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 480px;
      width: 90%;
    }
    h1 {
      color: #667eea;
      margin-bottom: 16px;
    }
    p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    a.back {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 10px 24px;
      border-radius: 20px;
      text-decoration: none;
      font-size: 0.95rem;
    }
    a.back:hover {
      background: #764ba2;
    }
  `
})
export class About {}
