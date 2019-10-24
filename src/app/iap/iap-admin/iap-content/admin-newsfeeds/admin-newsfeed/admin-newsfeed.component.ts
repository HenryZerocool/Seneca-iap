import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminNewsfeedsService } from '../admin-newsfeeds.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Location } from '@angular/common';

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

  newsfeedForm: FormGroup;

  editorForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: AdminNewsfeedsService,
    private location: Location
  ) {}

  get userName() {
    return this.newsfeedForm.get('title *');
  }

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    if (!isNaN(activeId)) {
      this.id = activeId;
      this.data = this.service.getNewsFeed(this.id)[0];
      console.log(this.data);
      if (this.data) {
        this.data.publishDate = new Date(this.data.publishDate);
      }
    } else {
      this.id = 0;
      this.data = {
        title: '',
        headline: '',
        status: '',
        lastModifier: '',
        publishDate: ''
      };
    }

    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });
  }

  addOneFeed() {
    this.service.addOneNewsFeed(this.data);
    this.goBack();
  }

  updateOneFeed() {
    this.service.updateOneNewsFeed(this.id, this.data);
    this.goBack();
  }

  deleteOneFeed() {
    this.service.deleteOneNewsFeed(this.id);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
