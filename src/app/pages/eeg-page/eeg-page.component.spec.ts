import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EegPageComponent } from './eeg-page.component';

describe('EegPageComponent', () => {
  let component: EegPageComponent;
  let fixture: ComponentFixture<EegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EegPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
