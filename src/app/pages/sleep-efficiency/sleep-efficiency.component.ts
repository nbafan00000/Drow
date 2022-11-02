import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sleep-efficiency',
  templateUrl: './sleep-efficiency.component.html',
  styleUrls: ['./sleep-efficiency.component.scss']
})
export class SleepEfficiencyComponent implements OnInit {

  constructor() { }
  maskWidth: number = 0;
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll(event: any): void {
    const height = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - (document.getElementById('home') as Element).clientHeight - 122;
    this.maskWidth = Math.min(Math.max(height /  ((document.getElementById('sleep-efficiency-scroll') as Element).clientHeight * 5 / 6.0) * 100, 0), 100);
  }
}
