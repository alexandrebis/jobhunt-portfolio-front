import { Component } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { NavigationService } from "../services/navigation.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'portfolio-navigation-menu',
    imports: [
        AsyncPipe,
        RouterLink,
    ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
    isHome$;

    menuItems = [
        { title: 'À propos', homePath: '/', fragment: 'about', pagePath: '/about' },
        { title: 'Mes projets', homePath: '/', fragment: 'projects', pagePath: '/projects' },
        { title: 'Recherche d\'emploi', homePath: '/', fragment: 'jobs', pagePath: '/jobs' },
    ]
    constructor(private headerService: NavigationService) {
        this.isHome$ = this.headerService.isHome();
    }
}
