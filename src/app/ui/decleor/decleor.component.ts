import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decleor',
  templateUrl: './decleor.component.html',
  styleUrls: ['./decleor.component.scss']
})
export class DecleorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
