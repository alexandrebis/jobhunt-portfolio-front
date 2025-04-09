import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuDropdownComponent } from './navigation-menu-dropdown.component';

describe('NavigationMenuDropdownComponent', () => {
  let component: NavigationMenuDropdownComponent;
  let fixture: ComponentFixture<NavigationMenuDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenuDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
