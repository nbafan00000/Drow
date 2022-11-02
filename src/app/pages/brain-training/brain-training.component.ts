import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-brain-training',
  templateUrl: './brain-training.component.html',
  styleUrls: ['./brain-training.component.scss']
})
export class BrainTrainingComponent implements OnInit {

  constructor() { }
  iPhoneWidth: number = 100;
  cardWidth: number = 700;
  cardWidth2: number = 740;
  cardWidth3: number = 800;
  cardTop1: number = 209;
  cardTop2: number = 594;
  cardTop3: number = 999.11;
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll(event: any): void {
    const height = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - (document.getElementById('home') as Element).clientHeight - (document.getElementById('sleep-efficiency') as Element).clientHeight - (document.getElementById('headset') as Element).clientHeight - 112;
    const scrollHeight = Math.min(Math.max(height /  ((document.getElementById('brain-training') as Element).clientHeight * 5 / 6.0) * 100, 0), 100);
    this.iPhoneWidth = 100 - scrollHeight * 0.51;
    this.cardTop1 = 209 * (100 - scrollHeight * 0.61) / 100;
    this.cardWidth = 700 * (100 - scrollHeight * 0.643) / 100.0;
    this.cardTop2 = 594 * (100 - scrollHeight * 0.63) / 100;
    this.cardWidth2 = 740 * (100 - scrollHeight * 0.662) / 100.0;
    this.cardTop3 = 999.11 * (100 - scrollHeight * 0.64) / 100;
    this.cardWidth3 = 800 * (100 - scrollHeight * 0.687) / 100.0;
  }
}
