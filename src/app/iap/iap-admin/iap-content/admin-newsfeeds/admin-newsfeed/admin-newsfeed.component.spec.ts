import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsfeedComponent } from './admin-newsfeed.component';

describe('AdminNewsfeedComponent', () => {
  let component: AdminNewsfeedComponent;
  let fixture: ComponentFixture<AdminNewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
