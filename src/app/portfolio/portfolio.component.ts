import { Component } from '@angular/core';
import { BioService } from "./services/bio.service";
import { AsyncPipe } from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  bio$;
  constructor(private bioService: BioService) {
    this.bio$ = this.bioService.getBio();
  }
}
