import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepEfficiencyComponent } from './sleep-efficiency.component';

describe('SleepEfficiencyComponent', () => {
  let component: SleepEfficiencyComponent;
  let fixture: ComponentFixture<SleepEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepEfficiencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
