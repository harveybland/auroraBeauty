import { Component, OnInit } from '@angular/core';

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faArrowRight = faArrowRight;
  faTiktok = faTiktok;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.animation()
  }

  animation() {
    const targets = document.querySelectorAll('.employee-wrapper');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    targets.forEach((target) => {
      observer.observe(target);
    });

    function callback(entries: any, observer: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          addActiveClass(entry.target);
        } else if (!entry.isIntersecting) {
          removeActiveClass(entry.target);
        }
      });
    }

    function addActiveClass(element: any) {
      element.classList.add('on');
    }

    function removeActiveClass(element: any) {
      element.classList.remove('on');
    }
  }

}
