import { Component } from '@angular/core';
import { BioService } from '../../portfolio/services/bio.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavigationMenuComponent } from "../navigation-menu/navigation-menu.component";
import { NavigationMenuDropdownComponent } from "../navigation-menu-dropdown/navigation-menu-dropdown.component";
import { distinctUntilChanged, fromEvent, startWith } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    CommonModule,
    AsyncPipe,
    RouterLink,
    NavigationMenuComponent,
    NavigationMenuDropdownComponent
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  bio$;
  isMobile$ = fromEvent(window, 'resize').pipe(
      startWith(window.innerWidth),
      map(() => window.innerWidth <= 768),
      distinctUntilChanged()
  );

  constructor(private bioService: BioService) {
    this.bio$ = this.bioService.getBio();
  }
}
