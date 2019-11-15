import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAnnouncementComponent } from './iap-content/admin-announcements/admin-announcement/admin-announcement.component';
import { AdminAnnouncementsComponent } from './iap-content/admin-announcements/admin-announcements.component';
import { AdminNewsfeedsComponent } from './iap-content/admin-newsfeeds/admin-newsfeeds.component';
import { AdminResourcesComponent } from './iap-content/admin-resources/admin-resources.component';
import { IapContentComponent } from './iap-content/iap-content.component';
import { AdminNewsfeedComponent } from './iap-content/admin-newsfeeds/admin-newsfeed/admin-newsfeed.component';
import { AdminResourceComponent } from './iap-content/admin-resources/admin-resource/admin-resource.component';
import { AgentResourcesComponent } from '../iap-agent/agent-resources/agent-resources.component';
import { AgentNewsfeedComponent } from '../iap-agent/agent-newsfeed/agent-newsfeed.component';
import { AgentNewsfeedDetailsComponent } from '../iap-agent/agent-newsfeed/agent-newsfeed-details/agent-newsfeed-details.component';
import { NewsfeedPreviewComponent } from './iap-content/admin-newsfeeds/admin-newsfeed/newsfeed-preview/newsfeed-preview.component';

import { IapHomeComponent } from './iap-home/iap-home.component';
import { AnnouncementPreviewComponent } from './iap-content/admin-announcements/admin-announcement/announcement-preview/announcement-preview.component';

export const adminRoutes: Routes = [
  { path: 'home', component: IapHomeComponent },
  {
    path: 'content',
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
          //preview agent
          {
            path: ':id',
            children: [
              { path: '', component: AdminAnnouncementComponent },
              { path: 'preview/:id', component: AnnouncementPreviewComponent }
            ]
          }
        ]
      },
      {
        path: 'newsfeed',
        children: [
          { path: '', component: AdminNewsfeedsComponent },
          { path: 'new', component: AdminNewsfeedComponent },
          {
            path: 'preview',
            component: AgentNewsfeedComponent
            // children: [{ path: '', component: AgentResourcesComponent }]
          },
          {
            path: ':id',
            // component: AdminNewsfeedComponent,
            children: [{ path: '', component: AdminNewsfeedComponent }, { path: 'preview/:id', component: NewsfeedPreviewComponent }]
          }
        ]
      },
      {
        path: 'resources',
        children: [
          { path: '', component: AdminResourcesComponent },
          { path: 'new', component: AdminResourceComponent },
          { path: ':id', component: AdminResourceComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class IapAdminRoutingModule {}
