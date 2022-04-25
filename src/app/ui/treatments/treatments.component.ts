import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {

  observer: any;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.subMenu();
  }

  subMenu() {
    const options = {
      threshold: [0, 1],
      rootMargin: '-50px',
    };

    this.observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting == false) {
        document.querySelector('.sub-menu')!.classList.remove('open');
      } else if (entries[0].isIntersecting == true) {
        document.querySelector('.sub-menu')!.classList.add('open');
      }
    }, options);

    const element1 = document.querySelector('.max-width');
    this.observer.observe(element1);
  }


}
