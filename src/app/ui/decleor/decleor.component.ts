import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-decleor',
  templateUrl: './decleor.component.html',
  styleUrls: ['./decleor.component.scss']
})
export class DecleorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.pinned();
  }
  pinned() {
    const tl = gsap.timeline({

      scrollTrigger: {
        trigger: 'section.two',
        start: 'top top',
        end: 'bottom',
        pin: true,
        scrub: true,
        markers: true
      }

    })

    tl
      .to('.box', { y: 300 }, 0)
  }


}
