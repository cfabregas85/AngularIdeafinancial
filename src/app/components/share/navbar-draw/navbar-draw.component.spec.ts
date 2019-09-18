import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDrawComponent } from './navbar-draw.component';

describe('NavbarDrawComponent', () => {
  let component: NavbarDrawComponent;
  let fixture: ComponentFixture<NavbarDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
