import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinician-page',
  templateUrl: './clinician-page.component.html',
  styleUrls: ['./clinician-page.component.scss']
})
export class ClinicianPageComponent implements OnInit {
  fields = [
    {
      id: 'full-name',
      label: "Contact Person's Full Name",
    },
    {
      id: 'clinic-name',
      label: "Clinic Name",
    },
    {
      id: 'contact-number',
      label: "Clinic Contact Number",
    },
    {
      id: 'clinic-address',
      label: "Clinic Address",
    },
    {
      id: 'email',
      label: "Email",
    }
    
  ];

  constructor() { }
  isModalOpen: boolean = false;

  ngOnInit(): void {
  }
  
  openModal($event: number) {
    this.isModalOpen = true;
  }

  onClose() {
    this.isModalOpen = false;
  }
}
