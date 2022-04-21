import { Component, OnInit } from '@angular/core';

declare var BookAppWidgetReady: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    BookAppWidgetReady()
  }

}
