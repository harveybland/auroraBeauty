import { HomedialogComponent } from './homedialog/homedialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _router: Router,
    public dialog: MatDialog) { }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.animation()
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

  openDialog(): void {
    const dialogRef = this.dialog.open(HomedialogComponent)
  }

}

