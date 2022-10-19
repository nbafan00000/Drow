import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainTrainingComponent } from './brain-training.component';

describe('BrainTrainingComponent', () => {
  let component: BrainTrainingComponent;
  let fixture: ComponentFixture<BrainTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrainTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
