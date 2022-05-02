import { HomedialogComponent } from './homedialog/homedialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _router: Router,
    public dialog: MatDialog) { }

  faArrowRight = faArrowRight;
  faPlay = faPlay;

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HomedialogComponent)
  }

}

