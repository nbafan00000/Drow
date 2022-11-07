import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clinician-app-works',
  templateUrl: './clinician-app-works.component.html',
  styleUrls: ['./clinician-app-works.component.scss']
})
export class ClinicianAppWorksComponent implements OnInit {
  @Output() openModal = new EventEmitter<number>();
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

  selected = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect($event: number) {
    this.selected = $event;
  }

  onOpenModal() {
    this.openModal.emit(this.selected);
  }

}
