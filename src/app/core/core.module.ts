import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router Module of Angular
import { RouterModule } from '@angular/router';
// Bootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: []

})
export class CoreModule { }

// OPTIONAL : Move portfolio models to a new portfolio module
