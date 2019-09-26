import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeEntryComponent } from './zipcode-entry.component';

describe('ZipcodeEntryComponent', () => {
  let component: ZipcodeEntryComponent;
  let fixture: ComponentFixture<ZipcodeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipcodeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
