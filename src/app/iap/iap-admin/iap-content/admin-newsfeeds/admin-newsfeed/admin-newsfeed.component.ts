import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminNewsfeedsService } from '../admin-newsfeeds.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-admin-newsfeed',
  templateUrl: './admin-newsfeed.component.html',
  styleUrls: [
    '../../admin-announcements/admin-announcement/admin-announcement.component.css'
  ]
  // styleUrls: ['./admin-newsfeed.component.css']
})
export class AdminNewsfeedComponent implements OnInit {
  id: number;
  data;

  editorForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: AdminNewsfeedsService
  ) {}

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    // this.id = isNaN(activeId) ? 0 : activeId;
    if (!isNaN(activeId)) {
      this.id = activeId;
      this.data = this.service.getNewsFeed(this.id)[0];
      if (this.data) {
        this.data.publishFrom = new Date(this.data.publishFrom);
        this.data.publishTo = new Date(this.data.publishTo);
      }
    } else {
      this.id = 0;
    }

    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });
  }
}
