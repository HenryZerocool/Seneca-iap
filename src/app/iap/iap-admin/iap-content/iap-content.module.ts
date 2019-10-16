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

import { HeaderComponent } from '../header/header.component';

import { AdminNewsfeedComponent } from './admin-newsfeed/admin-newsfeed.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { AdminAnnouncementsComponent } from './admin-announcements/admin-announcements.component';
import { AdminAnnouncementComponent } from './admin-announcements/admin-announcement/admin-announcement.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    AdminNewsfeedComponent,
    AdminResourcesComponent,
    AdminAnnouncementsComponent,
    AdminAnnouncementComponent
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
    HeaderComponent
  ],
  //   providers: []
  bootstrap: [IapContentComponent]
})
export class IapContentModule {}
