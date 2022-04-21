import { HeaderV2Component } from './../../components/header-v2/header-v2.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderV2Component
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderV2Component
  ]
})
export class CoreModule { }
