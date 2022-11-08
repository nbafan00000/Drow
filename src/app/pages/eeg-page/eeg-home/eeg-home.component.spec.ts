import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EegHomeComponent } from './eeg-home.component';

describe('EegHomeComponent', () => {
  let component: EegHomeComponent;
  let fixture: ComponentFixture<EegHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EegHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EegHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
