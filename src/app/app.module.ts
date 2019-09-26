import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { ZipcodeEntryComponent } from "./zipcode-entry/zipcode-entry.component";
import { CurrentConditionsComponent } from "./current-conditions/current-conditions.component";
import { EffectsModule } from "@ngrx/effects";
import { CurrentConditionsEffects } from "./effects/current-conditions.effects";
import { LocationService } from "./location.service";
import { WeatherService } from "./weather.service";

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    //EffectsModule.forFeature([CurrentConditionsEffects]),
    // EffectsModule.forRoot([CurrentConditionsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
