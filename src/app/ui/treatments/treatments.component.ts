import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit, OnDestroy {

  observer: any;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.subMenu();
    this.changeNavigation();
  }

  subMenu() {
    const options = {
      threshold: [0, 1],
      rootMargin: '-350px',
    };

    this.observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting == false) {
        document.querySelector('.sub-menu')!.classList.remove('open');
      } else if (entries[0].isIntersecting == true) {
        document.querySelector('.sub-menu')!.classList.add('open');
      }
    }, options);

    const element1 = document.querySelector('.open-menu');
    this.observer.observe(element1);
  }

  scroll(elem: string, offset: number) {
    const yOffset = offset;
    const element = document.querySelector(elem)!;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  changeNavigation() {
    const changeNav = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0) {
          document.querySelector('.active')!.classList.remove('active');

          var id = entry.target.getAttribute('id');

          let test = document.getElementById(`#${id}`)!.classList.add('active');
        }
      });
    };

    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver(changeNav, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

  }


  ngOnDestroy(): void {

    document.querySelector('.sub-menu')!.classList.remove('open');

    if (!!this.observer) {
      this.observer.disconnect();
    }
  }

}
