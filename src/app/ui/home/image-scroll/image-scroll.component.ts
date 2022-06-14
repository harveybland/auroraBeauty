import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-scroll',
  templateUrl: './image-scroll.component.html',
  styleUrls: ['./image-scroll.component.scss']
})
export class ImageScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.imageScroll()
  }

  imageScroll() {
    const section: any = document.querySelector('section');
    const images = document.querySelectorAll('img');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'scale(1)';
            section.style.backgroundColor = entry.target.getAttribute('data-color');
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'scale(.65)';
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: '-50px',
      }
    );

    images.forEach((el, i) => {
      observer.observe(el);
    });

  }

}
