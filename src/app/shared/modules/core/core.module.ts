import { HeaderV2Component } from './../../components/header-v2/header-v2.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderV2Component
  ],
  exports: [
    FooterComponent,
    HeaderV2Component
  ]
})
export class CoreModule { }
