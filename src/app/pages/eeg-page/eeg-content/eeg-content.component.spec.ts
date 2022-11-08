import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EegContentComponent } from './eeg-content.component';

describe('EegContentComponent', () => {
  let component: EegContentComponent;
  let fixture: ComponentFixture<EegContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EegContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EegContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
