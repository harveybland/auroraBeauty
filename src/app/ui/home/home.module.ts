import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGlideModule } from 'ngx-glide';
import { MatDialogModule } from '@angular/material/dialog';
import { HomedialogComponent } from './homedialog/homedialog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxGlideModule,
    FontAwesomeModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent, HomedialogComponent]
})
export class HomeModule { }
