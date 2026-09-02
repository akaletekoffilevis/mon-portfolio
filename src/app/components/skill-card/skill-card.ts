import { Component, input } from '@angular/core';

// Composant réutilisable qui affiche une compétence
// Concept : COMPONENT (bloc autonome HTML + CSS + logique)
@Component({
  selector: 'app-skill-card',
  standalone: true,
  template: `
    <div class="skill-card">
      <span class="skill-tag">{{ name() }}</span>
      <!-- input() : propriété reçue par le composant parent -->
    </div>
  `,
  styles: `
    .skill-card {
      display: inline-block;
    }
    .skill-tag {
      background: #667eea;
      color: white;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.85rem;
      display: inline-block;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .skill-tag:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  `
})
export class SkillCard {
  // input() : signal en lecture seule pour recevoir le nom de la compétence
  name = input<string>('');
}
