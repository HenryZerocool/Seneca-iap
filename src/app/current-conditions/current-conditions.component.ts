import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../reducers";
import { Router } from "@angular/router";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"]
})
export class CurrentConditionsComponent implements OnInit {
  zipcodes: string[];
  constructor(private store: Store<State>, private router: Router) {
    store
      .select(state => state.zipcodes)
      .subscribe(zipcode$ => (this.zipcodes = zipcode$.zipcodes));
  }

  ngOnInit() {}
}
