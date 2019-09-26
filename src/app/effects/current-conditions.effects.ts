import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { mergeMap, switchMap, catchError, map } from "rxjs/operators";
import { ZipcodeActionTypes, AddZipcodes } from "../actions/zipcode.actions";
import {
  CurrentConditionsSuccess,
  CurrentConditionsFail
} from "../actions/current-conditions.actions";
import { WeatherService } from "../weather.service";

@Injectable()
export class CurrentConditionsEffects {
  constructor(
    private actions$: Actions<AddZipcodes>,
    private weatherService: WeatherService
  ) {}

  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(ZipcodeActionTypes.AddZipcodes),
    mergeMap(action =>
      this.weatherService.loadCurrentConditions(action["zipcode"]).pipe(
        map(data => new CurrentConditionsSuccess(action["zipcode"], data)),
        catchError(err => of(new CurrentConditionsFail(action["error"], err)))
      )
    )
  );
}
