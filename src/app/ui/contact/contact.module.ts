import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ContactComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
