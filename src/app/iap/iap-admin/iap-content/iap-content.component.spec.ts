import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IapContentComponent } from './iap-content.component';

describe('IapContentComponent', () => {
  let component: IapContentComponent;
  let fixture: ComponentFixture<IapContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IapContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
