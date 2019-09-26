import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AddZipcodes } from "../actions/zipcode.actions";
import { State } from "../reducers";

@Component({
  selector: "app-zipcode-entry",
  templateUrl: "./zipcode-entry.component.html",
  styleUrls: ["./zipcode-entry.component.css"]
})
export class ZipcodeEntryComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  addLocation(zipcode: string) {
    this.store.dispatch(new AddZipcodes(zipcode));
  }
}
