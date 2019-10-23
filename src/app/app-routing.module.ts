import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IapComponent } from './iap/iap.component';
import { IapContentComponent } from './iap/iap-admin/iap-content/iap-content.component';
import { IapHomeComponent } from './iap/iap-admin/iap-home/iap-home.component';

import { contentRoutes } from './iap/iap-admin/iap-content/iap-content-routing.module';
import { IapAdminComponent } from './iap/iap-admin/iap-admin.component';
import { IapAgentComponent } from './iap/iap-agent/iap-agent.component';
import { LoginComponent } from './iap/login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    component: IapAdminComponent,
    children: [
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
    ]
  },
  {
    path: 'agent',
    component: IapAgentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
