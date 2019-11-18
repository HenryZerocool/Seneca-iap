import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  // prettier-ignore
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
  MatRadioModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatExpansionModule
} from '@angular/material';

// import {  } from '@angular/material/tabs';

import { IapContentComponent } from './iap-content/iap-content.component';
import { IapAdminRoutingModule } from './iap-admin-routing.module';
import { AdminNewsfeedComponent } from './iap-content/admin-newsfeeds/admin-newsfeed/admin-newsfeed.component';
import { AdminResourcesComponent } from './iap-content/admin-resources/admin-resources.component';
import { AdminAnnouncementsComponent } from './iap-content/admin-announcements/admin-announcements.component';
import { AdminAnnouncementComponent } from './iap-content/admin-announcements/admin-announcement/admin-announcement.component';
import { CommonModule } from '@angular/common';
import { AdminNewsfeedsComponent } from './iap-content/admin-newsfeeds/admin-newsfeeds.component';
import { AdminResourceComponent } from './iap-content/admin-resources/admin-resource/admin-resource.component';
import { NewsfeedPreviewComponent } from './iap-content/admin-newsfeeds/admin-newsfeed/newsfeed-preview/newsfeed-preview.component';
import { IapAdminComponent } from './iap-admin.component';
import { AnnouncementPreviewComponent } from './iap-content/admin-announcements/admin-announcement/announcement-preview/announcement-preview.component';

@NgModule({
  declarations: [
    AdminNewsfeedComponent,
    AdminResourcesComponent,
    AdminAnnouncementsComponent,
    AdminAnnouncementComponent,
    AdminNewsfeedsComponent,
    AdminResourceComponent,
    NewsfeedPreviewComponent,
    FileSelectDirective,
    AnnouncementPreviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IapAdminRoutingModule,
    QuillModule,
    HttpClientModule,
    // Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
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
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule
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
  bootstrap: [IapAdminComponent]
})
export class IapAdminModule {}
