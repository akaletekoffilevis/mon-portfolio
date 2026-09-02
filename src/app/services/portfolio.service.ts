import { Injectable, signal } from '@angular/core';

// Service injectable : code partagé entre plusieurs composants
// Concept : DEPENDENCY INJECTION (injecter du code dans un composant)
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly profile = signal({
    name: 'Koffi Levis AKALETE',
    title: 'Bienvenue sur mon portfolio',
    presentation:
      "Étudiant en développement d'applications, passionné par les technologies web et le createur de solutions numériques innovantes. Curieux et motivé, je cherche constamment à apprendre et à relever de nouveaux défis."
  });

  // Signal : liste des compétences (source de vérité unique)
  private readonly skills = signal<string[]>([
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'C#',
    'SQL',
    'Git'
  ]);

  // Record de temps passé par compétence (fictif, pour la démo)
  private readonly experience = signal<Record<string, number>>({
    HTML: 3,
    CSS: 2,
    JavaScript: 1,
    Python: 1,
    'C#': 1,
    SQL: 1,
    Git: 1
  });

  // Signal : nombre de clics sur le bouton "J'aime"
  private readonly likeCount = signal(0);

  // Méthodes du service (consommées par les composants)
  getProfile() {
    return this.profile;
  }
  getSkills() {
    return this.skills;
  }
  getExperience() {
    return this.experience;
  }
  getLikeCount() {
    return this.likeCount;
  }
  addLike() {
    // Met à jour le signal -> l'affichage se met à jour automatiquement
    this.likeCount.update((value) => value + 1);
  }
}
