import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNewsfeedComponent } from './agent-newsfeed.component';

describe('AgentNewsfeedComponent', () => {
  let component: AgentNewsfeedComponent;
  let fixture: ComponentFixture<AgentNewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentNewsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
