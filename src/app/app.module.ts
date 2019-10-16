import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// ngrx
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CurrentConditionsEffects } from './effects/current-conditions.effects';
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

import { AppRoutingModule } from './app-routing.module';
import { IapContentModule } from './iap/iap-admin/iap-content/iap-content.module';
import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';

import { LocationService } from './location.service';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { IapComponent } from './iap/iap.component';
import { IapAdminComponent } from './iap/iap-admin/iap-admin.component';
import { HeaderComponent } from './iap/iap-admin/header/header.component';
import { IapContentComponent } from './iap/iap-admin/iap-content/iap-content.component';
import { IapHomeComponent } from './iap/iap-admin/iap-home/iap-home.component';
import { AdminNewsfeedComponent } from './iap/iap-admin/admin-newsfeed/admin-newsfeed.component';
import { AdminResourcesComponent } from './iap/iap-admin/admin-resources/admin-resources.component';
import { AdminAnnouncementsComponent } from './iap/iap-admin/admin-announcements/admin-announcements.component';
import { AdminAnnouncementComponent } from './iap/iap-admin/admin-announcements/admin-announcement/admin-announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    WeatherComponent,
    IapComponent,
    IapAdminComponent,
    // HeaderComponent,
    IapContentComponent,
    IapHomeComponent,
    AdminAnnouncementComponent
    // AdminNewsfeedComponent,
    // AdminResourcesComponent,
    // AdminAnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IapContentModule,
    FormsModule,
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
    MatTableModule,
    // Ngrx
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    // EffectsModule.forFeature([CurrentConditionsEffects]),
    // EffectsModule.forRoot([CurrentConditionsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
