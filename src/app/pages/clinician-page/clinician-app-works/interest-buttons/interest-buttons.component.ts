import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interest-buttons',
  templateUrl: './interest-buttons.component.html',
  styleUrls: ['./interest-buttons.component.scss']
})
export class InterestButtonsComponent implements OnInit {
  @Input() selected: number = 1;
  @Output() select = new EventEmitter<number>();;
  formButtons = [
    {
      id: 1,
      label: 'EEG Training',
      icon: 'brain',
    },
    {
      id: 2,
      label: 'Sleep Diary',
      icon: 'moon',
    },
    {
      id: 3,
      label: 'Both',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(id: number) {
    this.select.emit(id);
  }
}
