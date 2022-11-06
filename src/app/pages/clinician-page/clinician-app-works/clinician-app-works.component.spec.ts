import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianAppWorksComponent } from './clinician-app-works.component';

describe('ClinicianAppWorksComponent', () => {
  let component: ClinicianAppWorksComponent;
  let fixture: ComponentFixture<ClinicianAppWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicianAppWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicianAppWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
