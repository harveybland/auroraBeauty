import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decleor',
  templateUrl: './decleor.component.html',
  styleUrls: ['./decleor.component.scss']
})
export class DecleorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.animation();
  }

  animation() {
    const targets = document.querySelectorAll('.animation');

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
