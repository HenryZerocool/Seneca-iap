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

  // newsfeedForm: FormGroup;
  // editorForm: FormGroup;
  // editorContent: string;

  editorStyle = {
    height: '300px'
  };

  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean']
    ]
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private newsfeedService: AdminNewsfeedsService,
    private location: Location
  ) {}

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    if (!isNaN(activeId)) {
      this.id = activeId;
      this.data = this.newsfeedService.getTempFeed(this.id)[0];
      console.log('get temp', this.data);
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
        publishDate: '',
        content: ''
      };
    }

    // this.editorForm = new FormGroup({
    //   editor: new FormControl(null)
    // });
  }

  // onSubmit() {
  //   this.editorContent = this.editorForm.get('editor').value;
  //   console.log(this.editorForm.get('editor').value);
  // }

  maxLength(e) {
    if (e.editor.getLength() > 1000) {
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  addOneFeed() {
    this.newsfeedService.addOneNewsFeed(this.data);
    this.goBack();
  }

  updateOneFeed() {
    // this.data.title = value.title;
    // this.data.headline = value.headline;
    // this.data.status = value.status;
    // this.data.publishDate = value.publishDate;
    // this.data.content = value.content;
    // console.log('update base', this.data);
    this.newsfeedService.updateOneNewsFeed(this.id);
    this.goBack();
  }

  deleteOneFeed() {
    this.newsfeedService.deleteOneNewsFeed(this.id);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  // updateTempFeed(value) {
  //   this.data.title = value.title;
  //   this.data.headline = value.headline;
  //   this.data.status = value.status;
  //   this.data.publishDate = value.publishDate;
  //   this.data.content = value.content;
  //   // console.log('udpate temp', this.data);
  //   this.newsfeedService.updateTempFeed(this.id, this.data);
  // }

  deleteTempFeed() {
    this.newsfeedService.deleteTemp(this.id);
    this.goBack();
  }
}
