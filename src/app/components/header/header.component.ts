import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isTop: boolean = true;

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
      slug: 'headset'
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

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isTop = window.scrollY === 0;
  }
}
