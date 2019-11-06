import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
  MatRadioModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
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
import { AdminResourceComponent } from './admin-resources/admin-resource/admin-resource.component';
import { NewsfeedPreviewComponent } from './admin-newsfeeds/admin-newsfeed/newsfeed-preview/newsfeed-preview.component';

@NgModule({
  declarations: [
    AdminNewsfeedComponent,
    AdminResourcesComponent,
    AdminAnnouncementsComponent,
    AdminAnnouncementComponent,
    AdminNewsfeedsComponent,
    AdminResourceComponent,
    NewsfeedPreviewComponent,
    FileSelectDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IapContentRoutingModule,
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
    MatNativeDateModule
    // Ngrx
  ],
  exports: [AdminNewsfeedComponent, AdminResourcesComponent, AdminAnnouncementsComponent, AdminAnnouncementComponent, AdminNewsfeedsComponent],
  //   providers: []
  bootstrap: [IapContentComponent]
})
export class IapContentModule {}
