import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IapComponent } from './iap/iap.component';
import { IapContentComponent } from './iap/iap-admin/iap-content/iap-content.component';
import { IapHomeComponent } from './iap/iap-admin/iap-home/iap-home.component';

import { IapAgentComponent } from './iap/iap-agent/iap-agent.component';
import { AgentResourcesComponent } from './iap/iap-agent/agent-resources/agent-resources.component';
import { AgentNewsfeedComponent } from './iap/iap-agent/agent-newsfeed/agent-newsfeed.component';
import { contentRoutes } from './iap/iap-admin/iap-content/iap-content-routing.module';
import { IapAdminComponent } from './iap/iap-admin/iap-admin.component';
import { LoginComponent } from './iap/login/login.component';
import { AgentNewsfeedDetailsComponent } from './iap/iap-agent/agent-newsfeed/agent-newsfeed-details/agent-newsfeed-details.component';

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
    path: 'agents',
    component: IapAgentComponent,
    children: [
      {
        path: 'resources',
        component: AgentResourcesComponent
      },
      {
        path: 'newsfeed',
        children: [
          {
            path: '',
            component: AgentNewsfeedComponent
          },
          { path: ':id', component: AgentNewsfeedDetailsComponent }
        ]
      }
    ]
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
export class AppRoutingModule { }
