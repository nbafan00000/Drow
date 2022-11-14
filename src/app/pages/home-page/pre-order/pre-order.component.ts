import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.scss']
})
export class PreOrderComponent implements OnInit {
  //@Output() click = new EventEmitter<null>();
  @Input() label: string = 'Pre-order';
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('here---');
    //this.click.emit();
  }
}
