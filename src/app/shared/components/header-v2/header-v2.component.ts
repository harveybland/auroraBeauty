import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-v2',
  templateUrl: './header-v2.component.html',
  styleUrls: ['./header-v2.component.scss']
})
export class HeaderV2Component implements OnInit {

  active: boolean = false

  constructor() { }

  ngOnInit() {
  }

  burger() {
    this.active = !this.active
  }

}
