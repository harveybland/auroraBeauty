import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
