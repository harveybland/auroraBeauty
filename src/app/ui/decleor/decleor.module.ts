import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecleorComponent } from './decleor.component';

const routes: Routes = [
  {
    path: '',
    component: DecleorComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DecleorComponent]
})
export class DecleorModule { }
