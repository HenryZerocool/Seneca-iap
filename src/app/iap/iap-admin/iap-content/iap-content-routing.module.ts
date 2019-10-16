import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAnnouncementsComponent } from '../admin-announcements/admin-announcements.component';
import { AdminNewsfeedComponent } from '../admin-newsfeed/admin-newsfeed.component';
import { AdminResourcesComponent } from '../admin-resources/admin-resources.component';
import { IapContentComponent } from './iap-content.component';

export const contentRoutes: Routes = [
  {
    path: '',
    component: IapContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'announcements',
        pathMatch: 'full'
      },
      {
        path: 'announcements',
        component: AdminAnnouncementsComponent
      },
      {
        path: 'newsfeed',
        component: AdminNewsfeedComponent
      },
      {
        path: 'resources',
        component: AdminResourcesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class IapContentRoutingModule {}
