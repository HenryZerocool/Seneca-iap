import { Action } from "@ngrx/store";

export enum ZipcodeActionTypes {
  LoadZipcodes = "[Zipcode] Load Zipcodes",
  AddZipcodes = "[Zipcode] Add Zipcodes",
  DeleteZipcodes = "[Zipcode] Delete Zipcodes"
}

export class LoadZipcodes implements Action {
  readonly type = ZipcodeActionTypes.LoadZipcodes;
}
export class AddZipcodes implements Action {
  readonly type = ZipcodeActionTypes.AddZipcodes;

  constructor(public payload: string) {}
}
export class DeleteZipcodes implements Action {
  readonly type = ZipcodeActionTypes.DeleteZipcodes;

  constructor(public payload: string) {}
}

export type ZipcodeActions = LoadZipcodes | AddZipcodes | DeleteZipcodes;
