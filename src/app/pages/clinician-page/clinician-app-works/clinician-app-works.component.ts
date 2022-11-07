import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clinician-app-works',
  templateUrl: './clinician-app-works.component.html',
  styleUrls: ['./clinician-app-works.component.scss']
})
export class ClinicianAppWorksComponent implements OnInit {
  @Input() openModal: Function = () => {};
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

  formButtons = [
    {
      id: 1,
      label: 'EEG Training',
      icon: 'brain',
    },
    {
      id: 2,
      label: 'Sleep Diary',
      icon: 'moon',
    },
    {
      id: 3,
      label: 'Both',
    }
  ];

  selected = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(id: number) {
    this.selected = id;
  }

}
