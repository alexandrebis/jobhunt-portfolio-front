import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
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

  constructor(private bioService: BioService, private headerService: HeaderService) {
    this.bio$ = this.bioService.getBio();
    this.isHome$ = this.headerService.isHome();
  }


}
