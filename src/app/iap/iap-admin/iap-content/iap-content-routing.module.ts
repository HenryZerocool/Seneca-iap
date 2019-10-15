import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAnnouncementsComponent } from '../admin-announcements/admin-announcements.component';
import { AdminNewsfeedComponent } from '../admin-newsfeed/admin-newsfeed.component';
import { AdminResourcesComponent } from '../admin-resources/admin-resources.component';

export const contentRoutes: Routes = [
  {
    path: '',
    // redirectTo: 'announcements',
    // outlet: 'content',
    component: AdminAnnouncementsComponent
    // pathMatch: 'full'
  },
  {
    path: 'announcements',
    // outlet: 'content',
    component: AdminAnnouncementsComponent
  },
  {
    path: 'newsfeed',
    // outlet: 'content',
    component: AdminNewsfeedComponent
  },
  {
    path: 'resources',
    // outlet: 'content',
    component: AdminResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class IapContentRoutingModule {}
