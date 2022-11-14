import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isTop: boolean = true;
  isMenuOpen: boolean = false;
  constructor() { }
  menuItems = [
    {
      label: 'Brain Training',
      slug: 'brain-training'
    },
    {
      label: 'Sleep Diary',
      slug: 'sleep-diary',
      link: '#sleep-diary'
    },
    {
      label: 'EEG Headset',
      slug: 'headset',
      link: 'eeg-headset'
    },
    {
      label: 'For Clinicians',
      slug: 'for-clinicians',
      link: 'clinicians',
    },
    {
      label: 'About Us',
      slug: 'about-us',
      link: 'about'
    },
  ];
  
  ngOnInit(): void {
    
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isTop = window.scrollY === 0;
  }

  onClose() {
    this.isMenuOpen = false;
  }

  onOpen() {
    this.isMenuOpen = true;
  }
}
