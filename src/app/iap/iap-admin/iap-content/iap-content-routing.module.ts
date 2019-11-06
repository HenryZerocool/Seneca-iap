import { AdminAnnouncementComponent } from './admin-announcements/admin-announcement/admin-announcement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAnnouncementsComponent } from './admin-announcements/admin-announcements.component';
import { AdminNewsfeedsComponent } from './admin-newsfeeds/admin-newsfeeds.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { IapContentComponent } from './iap-content.component';
import { AdminNewsfeedComponent } from './admin-newsfeeds/admin-newsfeed/admin-newsfeed.component';
import { AdminResourceComponent } from './admin-resources/admin-resource/admin-resource.component';
import { AgentResourcesComponent } from '../../iap-agent/agent-resources/agent-resources.component';
import { AgentNewsfeedComponent } from '../../iap-agent/agent-newsfeed/agent-newsfeed.component';
import { AgentNewsfeedDetailsComponent } from '../../iap-agent/agent-newsfeed/agent-newsfeed-details/agent-newsfeed-details.component';
import { NewsfeedPreviewComponent } from './admin-newsfeeds/admin-newsfeed/newsfeed-preview/newsfeed-preview.component';

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
          { path: '', component: AdminResourcesComponent }, // ResourceComponent // AdminResourcesComponent
          { path: 'new', component: AdminResourceComponent },
          { path: ':id', component: AdminResourceComponent }
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
