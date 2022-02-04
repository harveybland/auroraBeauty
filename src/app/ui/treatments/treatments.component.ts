import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.comparison();
    this.images()
  }

  images() {
    gsap.from('.test1', { duration: 1.5, y: '-100%', ease: 'slow' })
    gsap.from('.test2', { duration: 3, y: '-100%', ease: 'slow' })
    gsap.from('.test3', { duration: 2, y: '-100%', ease: 'slow' })
  }

  comparison() {
    gsap.utils.toArray<any>('.comparisonSection').forEach((section) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 10.5%',
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => '+=' + section.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
        defaults: { ease: 'none' },
      });
      // animate the container one way...
      tl.fromTo(
        section.querySelector('.afterImage'),
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      )
        // ...and the image the opposite way (at the same time)
        .fromTo(
          section.querySelector('.afterImage img'),
          { xPercent: -100, x: 0 },
          { xPercent: 0 },
          0
        );
    });
  }


}
