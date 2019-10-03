import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IapHomeComponent } from './iap-home.component';

describe('IapHomeComponent', () => {
  let component: IapHomeComponent;
  let fixture: ComponentFixture<IapHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IapHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IapHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
