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
    this.box();
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

  box() {
    gsap.utils.toArray<any>('.website-section').forEach((section) => {
      const elems = section.querySelectorAll('.js-content-opacity');

      gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 30%',
        // markers: true,
        onEnter: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
          }),
        // onLeave: () =>
        //   gsap.to(elems, {
        //     y: -50,
        //     opacity: 0,
        //     stagger: 0.2,
        //   }),
        onEnterBack: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: -0.2,
          }),
        onLeaveBack: () =>
          gsap.to(elems, {
            y: 50,
            opacity: 0,
            stagger: -0.2,
          }),
      });
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
    this.box();
    this.parallax();
  }

}

