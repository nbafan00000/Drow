import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() bgColor: string = '#4C48F4';
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
