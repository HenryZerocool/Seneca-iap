import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentResourcesComponent } from './agent-resources.component';

describe('AgentResourcesComponent', () => {
  let component: AgentResourcesComponent;
  let fixture: ComponentFixture<AgentResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
