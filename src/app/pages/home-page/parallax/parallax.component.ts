import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  positions = [
    {
      title: 'UI/UX Designer',
      location: 'Remote',
    },
    {
      title: 'Developer',
      location: 'Oslo',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
