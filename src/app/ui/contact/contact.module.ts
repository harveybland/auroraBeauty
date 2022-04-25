import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
