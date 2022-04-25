import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
