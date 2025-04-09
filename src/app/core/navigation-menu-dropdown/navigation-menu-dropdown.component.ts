import { Component } from '@angular/core';
import { NavigationService } from "../services/navigation.service";
import { RouterLink } from "@angular/router";
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from "@ng-bootstrap/ng-bootstrap";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'portfolio-navigation-menu-burger',
  imports: [
    RouterLink,
    NgbDropdownMenu,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownItem,
    AsyncPipe
  ],
  templateUrl: './navigation-menu-dropdown.component.html',
  styleUrl: './navigation-menu-dropdown.component.css'
})
export class NavigationMenuDropdownComponent {
  isHome$;

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'MyProjects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'JobHunt', homePath: '/', fragment: 'jobs', pagePath: '/jobs' },
  ]
  constructor(private headerService: NavigationService) {
    this.isHome$ = this.headerService.isHome();
  }
}
