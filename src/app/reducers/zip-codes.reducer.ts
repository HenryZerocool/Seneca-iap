import { Action } from "@ngrx/store";
import { ZipcodeActionTypes, ZipcodeActions } from "../actions/zipcode.actions";

export const zipCodesFeatureKey = "zipCodes";

export interface ZipcodeState {
  zipcodes: string[];
  // zipcodes: Array<string>
}

export const initialState: ZipcodeState = {
  zipcodes: ["init"]
};

export function zipcodeReducer(
  state = initialState,
  action: ZipcodeActions
): ZipcodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcodes:
      // return { ...state, zipcodes: [...state.zipcodes, action.payload] };
      return { zipcodes: [...state.zipcodes, action.payload] };
    case ZipcodeActionTypes.DeleteZipcodes:
      return {
        zipcodes: state.zipcodes.filter(zipcode => zipcode != action.payload)
      };
    default:
      return state;
  }
}
