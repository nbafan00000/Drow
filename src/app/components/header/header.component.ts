import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menuItems = [
    {
      label: 'Brain Training',
      slug: 'brain-training'
    },
    {
      label: 'Sleep Diary',
      slug: 'sleep-diary'
    },
    {
      label: 'EEG Headset',
      slug: 'eeg-headset'
    },
    {
      label: 'For Clinicians',
      slug: 'for-clinicians'
    },
    {
      label: 'About Us',
      slug: 'about-us'
    },
  ];
  
  ngOnInit(): void {
    
  }

}
