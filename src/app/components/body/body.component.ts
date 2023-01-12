import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  list = [
    {
      name: 'Sale Pending',
      active: true,
    },
    {
      name: 'Sale Live',
      active: false,
    },
    {
      name: 'Sale Completed',
      active: false,
    },
    {
      name: 'Vesting Started',
      active: false,
    },
    {
      name: 'EXX Launched',
      active: false,
    }
  ]
}
