import { Component } from '@angular/core';
import { BioService } from '../../portfolio/services/bio.service';
import { NavigationService } from '../services/navigation.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    CommonModule,
    AsyncPipe,
    RouterLink,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  bio$;
  isHome$;

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'MyProjects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'JobHunt', homePath: '/', fragment: 'jobs', pagePath: '/jobs' },
  ]

  constructor(private bioService: BioService, private headerService: NavigationService) {
    this.bio$ = this.bioService.getBio();
    this.isHome$ = this.headerService.isHome();
  }


}
