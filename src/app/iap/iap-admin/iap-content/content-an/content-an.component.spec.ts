import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAnComponent } from './content-an.component';

describe('ContentAnComponent', () => {
  let component: ContentAnComponent;
  let fixture: ComponentFixture<ContentAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
