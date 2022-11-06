import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinician-app-works',
  templateUrl: './clinician-app-works.component.html',
  styleUrls: ['./clinician-app-works.component.scss']
})
export class ClinicianAppWorksComponent implements OnInit {
  logos = [
    'logo-tuple',
    'logo-mirage',
    'logo-statickit',
    'logo-transistor',
    'logo-workcation',
  ];

  devices = [
    'tablet-speaker',
    'mobile-camera',
    'desktop',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
