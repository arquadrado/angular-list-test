import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('expanded', [
      state('void', style({
        height: '0',
      })),
      state('*',   style({
        height: '*'
      })),
      transition('void => *', animate('100ms ease-in')),
      transition('* => void', animate('100ms ease-out'))
    ])
  ]
})
export class ListComponent implements OnInit {

  items = [
    {
      id: 7,
      name: 'Anto'
    },
    {
      id: 8,
      name: 'Dani'
    },
    {
      id: 9,
      name: 'Pati'
    },
    {
      id: 10,
      name: 'Tur'
    }
  ];

  toExpand = [];

  constructor() { }

  ngOnInit() {
  }

  expand(i) {
    console.log(this.toExpand.indexOf(i), this.toExpand);
    const index = this.toExpand.indexOf(i);
    if (index > -1) {
      this.toExpand.splice(index, 1);
      console.log(this.toExpand, 'after splice');
      return;
    }

    this.toExpand.push(i);
    console.log(this.toExpand, 'after push');
  }

  shouldExpand(i) {
    console.log(this.toExpand.indexOf(i) > -1, 'should');
    return this.toExpand.indexOf(i) > -1;
  }

}
