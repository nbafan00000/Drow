import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eeg-content',
  templateUrl: './eeg-content.component.html',
  styleUrls: ['./eeg-content.component.scss']
})
export class EegContentComponent implements OnInit {
  descriptions = [
    {
      image: '../../../assets/feather.svg',
      title: 'Portable Device',
    },
    {
      image: '../../../assets/hand-waving.svg',
      title: 'Simple Mobile App',
    },
    {
      image: '../../../assets/flask.svg',
      title: 'Scientific Solution',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
