import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-software-support',
  templateUrl: './software-support.component.html',
  styleUrls: ['./software-support.component.scss']
})
export class SoftwareSupportComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello software-support');
  }

}
