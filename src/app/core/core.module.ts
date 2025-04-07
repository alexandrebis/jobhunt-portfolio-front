import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router Module of Angular
import { RouterModule } from '@angular/router';
// HTTP Client Module of Angular
import { provideHttpClient } from '@angular/common/http';
// Bootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  providers: [provideHttpClient()]
})
export class CoreModule { }

// OPTIONAL : Move portfolio models to a new portfolio module
