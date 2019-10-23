import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IapAgentComponent } from './iap-agent.component';

describe('IapAgentComponent', () => {
  let component: IapAgentComponent;
  let fixture: ComponentFixture<IapAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IapAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IapAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
