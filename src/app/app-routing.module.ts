import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IapComponent } from './iap/iap.component';
import { IapContentComponent } from './iap/iap-admin/iap-content/iap-content.component';
import { IapHomeComponent } from './iap/iap-admin/iap-home/iap-home.component';

const routes: Routes = [
  {
    path: '',
    component: IapHomeComponent
  },
  {
    path: 'home',
    component: IapHomeComponent
  },
  {
    path: 'content',
    component: IapContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
