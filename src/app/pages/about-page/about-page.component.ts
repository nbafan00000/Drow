import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  people = [
    {
      name: 'Rakeshkumar G L',
      role: 'Software Engineer',
      photo: 'rakesh.png',
    },
    {
      name: 'Anri Iaganashvili',
      role: 'Product Designer',
      photo: 'anri-big.png',
    },
    {
      name: 'Eidan Tzdaka',
      photo: 'eidan.png'
    },
    {
      name: 'Håkon Krogh',
      photo: 'hakon.png'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
