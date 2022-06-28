import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { GoogleMapsModule } from '@angular/google-maps'

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
    RouterModule.forChild(routes),
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
