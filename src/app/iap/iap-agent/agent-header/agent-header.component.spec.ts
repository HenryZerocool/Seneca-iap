import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentHeaderComponent } from './agent-header.component';

describe('AgentHeaderComponent', () => {
  let component: AgentHeaderComponent;
  let fixture: ComponentFixture<AgentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
