import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headset',
  templateUrl: './headset.component.html',
  styleUrls: ['./headset.component.scss']
})
export class HeadsetComponent implements OnInit {
  descriptions = [
    {
      image: '../../../assets/head.svg',
      title: 'Wear Our Device',
      description: 'Sit comfortable and wear our device and then press start brain training.'
    },
    {
      image: '../../../assets/eye-closed.svg',
      title: 'Keep your eyes closed',
      description: 'Listen session to calculate your sleep efficiency'
    },
    {
      image: '../../../assets/efficiency.svg',
      title: 'Calculating Efficiency',
      description: 'Our A.I. calculates your expected sleep wellness for tonight. With further training, this number will increase over time'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
