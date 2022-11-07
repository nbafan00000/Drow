import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestButtonsComponent } from './interest-buttons.component';

describe('InterestButtonsComponent', () => {
  let component: InterestButtonsComponent;
  let fixture: ComponentFixture<InterestButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
