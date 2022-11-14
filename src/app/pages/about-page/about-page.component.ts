import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  people = [
    {
      name: 'Håkon Krogh',
      photo: 'hakon.png',
      role: 'CEO & Co-Founder'
    },
    {
      name: 'Eidan Tzdaka',
      photo: 'eidan.png',
      role: 'CTO & Co-Founder'
    },
    {
      name: 'Anri Iaganashvili',
      role: 'Product Designer',
      photo: 'anri-big.png',
    },
    {
      name: 'Rakeshkumar G L',
      role: 'Software Engineer',
      photo: 'rakesh.png',
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToHeadset() {
    this.router.navigate(['/eeg-headset']);
  }
}
