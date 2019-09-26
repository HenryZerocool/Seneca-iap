import { Action } from "@ngrx/store";

export enum CurrentConditionsActionTypes {
  CurrentConditionsSuccess = "[CurrentCondition] Success",
  CurrentConditionsFail = "[CurrentCondition] Fail"
}

export class CurrentConditionsSuccess implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsSuccess;

  constructor(public zipcode: string, public condition: any) {}
}

export class CurrentConditionsFail implements Action {
  readonly type = CurrentConditionsActionTypes.CurrentConditionsFail;

  constructor(public error: string, public condition: any) {}
}

export type CurrentConditionsActions =
  | CurrentConditionsSuccess
  | CurrentConditionsFail;
