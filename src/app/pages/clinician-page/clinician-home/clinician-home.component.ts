import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clinician-home',
  templateUrl: './clinician-home.component.html',
  styleUrls: ['./clinician-home.component.scss']
})
export class ClinicianHomeComponent implements OnInit {
  @Output() openModal = new EventEmitter<number>();
  selected = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal() {
    this.openModal.emit(this.selected);
  }
}
