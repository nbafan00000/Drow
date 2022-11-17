import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClinicService, Clinic } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinician-page',
  templateUrl: './clinician-page.component.html',
  styleUrls: ['./clinician-page.component.scss']
})
export class ClinicianPageComponent implements OnInit {
  selected = 0;
  clinicService: any;
  fullName = "";
  fields = [
    {
      id: 'fullName',
      label: "Contact Person's Full Name",
      type: "text",
      value: "",
    },
    {
      id: 'clinicName',
      label: "Clinic Name",
      type: "text",
      value: "",
    },
    {
      id: 'service',
      label: "Clinic Contact Number",
      type: "text",
      value: "",
    },
    {
      id: 'cliniciAddress',
      label: "Clinic Address",
      type: "text",
      value: "",
    },
    {
      id: 'cliniemail',
      label: "Email",
      type: "email",
      value: "",
    }
    
  ];

  constructor(private httpClient: HttpClient) { 
    this.clinicService = new ClinicService(httpClient);
  }
  isModalOpen: boolean = false;

  ngOnInit(): void {
  }
  
  onSelect($event: number) {
    this.selected = $event;
  }
  
  openModal($event: number) {
    this.selected = $event;
    this.isModalOpen = true;
  }

  onClose() {
    this.isModalOpen = false;
  }

  onContinue() {
    console.log('this.fie--', this.fields);
    const data: any = {
      createdDatetime: new Date().toDateString(),
    };
    for(let field of this.fields) {
      data[field.id] = field.value;
    }
    this.clinicService.postClinic({
      clinicEnquiryModel: data
    }).subscribe((result: any) => {
      if(result && result.status) {
        this.onClose();
      } else {
        alert('An error has occured, please try again!')
      }
    })
  }
}
