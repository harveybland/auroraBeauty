import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
