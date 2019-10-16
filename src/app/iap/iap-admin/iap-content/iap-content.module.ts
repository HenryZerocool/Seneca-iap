import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// ngrx

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTableModule,
  MatTabsModule,
  MatMenuModule,
  MatStepperModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  MatAutocompleteModule
} from '@angular/material';
// import {  } from '@angular/material/tabs';

import { IapContentComponent } from './iap-content.component';
import { IapContentRoutingModule } from './iap-content-routing.module';

import { AdminNewsfeedComponent } from './admin-newsfeeds/admin-newsfeed/admin-newsfeed.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { AdminAnnouncementsComponent } from './admin-announcements/admin-announcements.component';
import { AdminAnnouncementComponent } from './admin-announcements/admin-announcement/admin-announcement.component';
import { CommonModule } from '@angular/common';
import { AdminNewsfeedsComponent } from './admin-newsfeeds/admin-newsfeeds.component';

@NgModule({
  declarations: [
    AdminNewsfeedComponent,
    AdminResourcesComponent,
    AdminAnnouncementsComponent,
    AdminAnnouncementComponent,
    AdminNewsfeedsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    IapContentRoutingModule,
    // Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatStepperModule,
    MatCardModule,
    MatSortModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule
    // Ngrx
  ],
  exports: [
    AdminNewsfeedComponent,
    AdminResourcesComponent,
    AdminAnnouncementsComponent,
    AdminAnnouncementComponent,
    AdminNewsfeedsComponent
  ],
  //   providers: []
  bootstrap: [IapContentComponent]
})
export class IapContentModule {}
