import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'primary';
  @Input() label: string = '';
  hover: boolean = false;
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<null>();;

  colors: { [key: string]: any } = {
    'primary': {
      'bgColor': '#4C48F4',
      'hoverColor': '#4541E3',
      'disabledColor': 'rgba(76, 72, 244, 0.2)',
    },
    'secondary': {
      'bgColor': '#3F659D',
      'hoverColor': '#36588A',
      'disabledColor': 'rgba(63, 101, 157, 0.2)',
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();
  }

}
