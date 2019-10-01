import { BrowserModule } from '@angular/platform-browser';
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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {} from '@angular/material/menu';
import {
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule
} from '@angular/material';
// import {  } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';

import { LocationService } from './location.service';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { IapComponent } from './iap/iap.component';
import { IapAdminComponent } from './iap/iap-admin/iap-admin.component';
import { HeaderComponent } from './iap/iap-admin/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    WeatherComponent,
    IapComponent,
    IapAdminComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
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
