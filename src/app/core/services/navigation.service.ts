import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  /**
   * Retourne un observable qui émet un booléen indiquant si l'URL actuelle correspond à la page d'accueil.
   * L'observable émettra une valeur initiale basée sur l'URL actuelle et se mettra à jour à chaque changement de navigation.
   *
   * - Si l'URL commence par '/#' ou est exactement '/', cela sera considéré comme la page d'accueil.
   * - Utilise l'événement NavigationEnd pour détecter la fin d'une navigation et vérifier si l'URL correspond à la page d'accueil.
   *
   * @returns Un observable qui émet un booléen : true si l'URL est celle de la page d'accueil, false sinon.
   */
  isHome() {
    return this.router.events.pipe(
      // Filtre les événements pour ne garder que ceux de type NavigationEnd
      filter(event => event instanceof NavigationEnd),
      // Vérifie que l'URL corresponde à la page d'accueil

      map(event => {
        // Vérifie si l'URL correspond à la page d'accueil
        return event instanceof NavigationEnd && this.isHomeUrl(event.url);

      }),
      startWith(this.isHomeUrl(this.router.url))
    )
  }

  private isHomeUrl(url: string): boolean {
    return url.startsWith('/#') || url === '/';
  }
}
