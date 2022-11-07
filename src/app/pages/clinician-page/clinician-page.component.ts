import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinician-page',
  templateUrl: './clinician-page.component.html',
  styleUrls: ['./clinician-page.component.scss']
})
export class ClinicianPageComponent implements OnInit {

  constructor() { }
  isModalOpen: boolean = false;

  ngOnInit(): void {
  }
  
  openModal($event: number) {
    this.isModalOpen = true;
  }
}
