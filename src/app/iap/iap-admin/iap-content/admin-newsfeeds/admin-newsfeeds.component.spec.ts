import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsfeedsComponent } from './admin-newsfeeds.component';

describe('AdminNewsfeedsComponent', () => {
  let component: AdminNewsfeedsComponent;
  let fixture: ComponentFixture<AdminNewsfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
