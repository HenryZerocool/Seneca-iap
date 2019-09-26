import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentConditionsEffects } from './current-conditions.effects';

describe('CurrentConditionsEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentConditionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentConditionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CurrentConditionsEffects>(CurrentConditionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
