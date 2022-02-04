import { CoreModule } from './../shared/modules/core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(o => o.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(o => o.AboutModule),
      },
      {
        path: 'treatments',
        loadChildren: () => import('./treatments/treatments.module').then(o => o.TreatmentsModule),
      },
      {
        path: 'decleor',
        loadChildren: () => import('./decleor/decleor.module').then(o => o.DecleorModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(o => o.ContactModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UiComponent]
})
export class UiModule { }
