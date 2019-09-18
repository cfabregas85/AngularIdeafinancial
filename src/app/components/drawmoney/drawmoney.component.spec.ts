import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawmoneyComponent } from './drawmoney.component';

describe('DrawmoneyComponent', () => {
  let component: DrawmoneyComponent;
  let fixture: ComponentFixture<DrawmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
