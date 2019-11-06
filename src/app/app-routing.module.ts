import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IapComponent } from './iap/iap.component';
import { IapContentComponent } from './iap/iap-admin/iap-content/iap-content.component';
import { IapHomeComponent } from './iap/iap-admin/iap-home/iap-home.component';

import {
  IapContentRoutingModule,
  contentRoutes
} from './iap/iap-admin/iap-content/iap-content-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: IapHomeComponent
  },
  {
    path: 'content',
    // component: IapContentComponent
    children: contentRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
