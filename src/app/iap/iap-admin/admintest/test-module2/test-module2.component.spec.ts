import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModule2Component } from './test-module2.component';

describe('TestModule2Component', () => {
  let component: TestModule2Component;
  let fixture: ComponentFixture<TestModule2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestModule2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
