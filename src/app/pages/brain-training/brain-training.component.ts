import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-brain-training',
  templateUrl: './brain-training.component.html',
  styleUrls: ['./brain-training.component.scss']
})
export class BrainTrainingComponent implements OnInit {

  constructor() { }
  iPhoneWidth: number = 100;

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll(event: any): void {
    const scrollTop = (event as Element).clientTop;
    const height = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - (document.getElementById('home') as Element).clientHeight - (document.getElementById('sleep-efficiency') as Element).clientHeight - (document.getElementById('headset') as Element).clientHeight - 112;
    const scrollHeight = Math.min(Math.max(height /  ((document.getElementById('brain-training') as Element).clientHeight * 5 / 6.0) * 100, 0), 100);

    this.iPhoneWidth = 100 - scrollHeight * 0.51;
    console.log('scrollheight---', this.iPhoneWidth);
  }
}
