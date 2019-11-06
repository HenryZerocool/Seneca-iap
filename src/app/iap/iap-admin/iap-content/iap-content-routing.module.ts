import { AdminAnnouncementComponent } from './admin-announcements/admin-announcement/admin-announcement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAnnouncementsComponent } from './admin-announcements/admin-announcements.component';
import { AdminNewsfeedsComponent } from './admin-newsfeeds/admin-newsfeeds.component';
//import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { IapContentComponent } from './iap-content.component';
import { AdminNewsfeedComponent } from './admin-newsfeeds/admin-newsfeed/admin-newsfeed.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { ResourceComponent } from './admin-resources/admin-resource/resources/resources.component';

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
        // component: AdminAnnouncementsComponent,
        children: [
          { path: '', component: AdminAnnouncementsComponent },
          { path: 'new', component: AdminAnnouncementComponent },
          { path: ':id', component: AdminAnnouncementComponent }
        ]
      },
      {
        path: 'newsfeed',
        children: [
          { path: '', component: AdminNewsfeedsComponent },
          { path: 'new', component: AdminNewsfeedComponent },
          { path: ':id', component: AdminNewsfeedComponent }
        ]
      },
      {
        path: 'resources',
        children: [
          { path: '', component: ResourceComponent }, // ResourceComponent // AdminResourcesComponent
          { path: 'new', component: ResourceComponent },
          { path: ':id', component: ResourceComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class IapContentRoutingModule {}
