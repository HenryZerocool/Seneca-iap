import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNewsfeedDetailsComponent } from './agent-newsfeed-details.component';

describe('AgentNewsfeedDetailsComponent', () => {
  let component: AgentNewsfeedDetailsComponent;
  let fixture: ComponentFixture<AgentNewsfeedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentNewsfeedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentNewsfeedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
