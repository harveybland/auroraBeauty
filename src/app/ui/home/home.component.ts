import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(public _router: Router) { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.scrollAnimation();
    this.parallax();
  }

  scrollAnimation() {
    gsap.to('.a', {
      scrollTrigger: {
        trigger: '.a',
        start: 'top 60%',
        end: 'bottom 30% ',
        scrub: true,
        // markers: true,
      },
      y: -100,
      opacity: 1,
    });
    gsap.to('.b', {
      scrollTrigger: {
        trigger: '.b',
        start: 'top 60%',
        end: 'bottom 30% ',
        scrub: true,
        // markers: true,
      },
      y: -100,
      opacity: 1,
    });
    gsap.to('.c', {
      scrollTrigger: {
        trigger: '.c',
        start: 'top 60%',
        end: 'bottom 30% ',
        scrub: true,
        // markers: true,
      },
      y: -100,
      opacity: 1,
    });
  }


  parallax() {
    let parallax = gsap.timeline().to('.parallax img', {
      y: 100,
      scrollTrigger: {
        trigger: '#wrapper',
        start: 'top 50%',
        end: 'bottom 10%',
        scrub: true,
        // markers: true,
      },
    });
  }

  ngOnDestroy() {
    this.scrollAnimation();
    this.parallax();
  }

}

