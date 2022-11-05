import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianHomeComponent } from './clinician-home.component';

describe('ClinicianHomeComponent', () => {
  let component: ClinicianHomeComponent;
  let fixture: ComponentFixture<ClinicianHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicianHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicianHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
