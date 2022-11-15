import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-brain-training',
  templateUrl: './brain-training.component.html',
  styleUrls: ['./brain-training.component.scss']
})
export class BrainTrainingComponent implements OnInit {
  texts = [
    {
      text: 'Simple Mobile App',
      icon: 'hand-waving',
    },
    {
      text: '30 Soundscape',
      icon: 'speaker-high',
    },
    {
      text: 'Scientific Solution',
      icon: 'flask',
    },
    {
      text: 'Portable Device',
      icon: 'feather',
    },
    {
      text: 'Support Anytime',
      icon: 'life-buoy',
    },
  ];
  constructor() { }
  width = 0;
  scrollHeight = 0;
  iPhoneWidth: number = 100;
  cardWidth: number = 700;
  cardWidth2: number = 740;
  cardWidth3: number = 800;
  cardTop1: number = 209;
  cardTop2: number = 594;
  cardTop3: number = 999.11;
  textWidth: number = 0;
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll(event: any): void {
    this.width = window.innerWidth;
    const height = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - (document.getElementById('home') as Element).clientHeight - (document.getElementById('sleep-efficiency') as Element).clientHeight - (document.getElementById('headset') as Element).clientHeight - 112;
    this.scrollHeight = Math.min(Math.max(height /  ((document.getElementById('brain-training') as Element).clientHeight * 2 / 3.0) * 100, 0), 100);
    this.iPhoneWidth = 100 - this.scrollHeight * 0.51;
    this.cardTop1 = 209 * (100 - this.scrollHeight * 0.61) / 100;
    this.cardWidth = 700 * (100 - this.scrollHeight * 0.643) / 100.0;
    this.cardTop2 = 594 * (100 - this.scrollHeight * 0.63) / 100;
    this.cardWidth2 = 740 * (100 - this.scrollHeight * 0.662) / 100.0;
    this.cardTop3 = 999.11 * (100 - this.scrollHeight * 0.64) / 100;
    this.cardWidth3 = 800 * (100 - this.scrollHeight * 0.687) / 100.0;
    this.textWidth = Math.max(0, 14.25 * (this.scrollHeight - 80));
  }
}
