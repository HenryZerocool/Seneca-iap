import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedPreviewComponent } from './newsfeed-preview.component';

describe('NewsfeedPreviewComponent', () => {
  let component: NewsfeedPreviewComponent;
  let fixture: ComponentFixture<NewsfeedPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
