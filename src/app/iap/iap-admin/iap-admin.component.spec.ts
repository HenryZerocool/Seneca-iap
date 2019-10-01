import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IapAdminComponent } from './iap-admin.component';

describe('IapAdminComponent', () => {
  let component: IapAdminComponent;
  let fixture: ComponentFixture<IapAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IapAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IapAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
