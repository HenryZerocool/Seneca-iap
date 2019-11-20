import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AdminNewsfeedsService } from '../admin-newsfeeds.service';

@Component({
  selector: 'app-admin-newsfeed',
  templateUrl: './admin-newsfeed.component.html',
  styleUrls: ['../../admin-announcements/admin-announcement/admin-announcement.component.css']
  // styleUrls: ['./admin-newsfeed.component.css']
})
export class AdminNewsfeedComponent implements OnInit {
  id: number;
  data;

  // newsfeedForm: FormGroup;
  // editorForm: FormGroup;
  // editorContent: string;

  editorStyle = {
    height: '200px'
  };

  // config = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  //     ['blockquote', 'code-block'],

  //     [{ header: 1 }, { header: 2 }], // custom button values
  //     [{ list: 'ordered' }, { list: 'bullet' }],
  //     [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  //     [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  //     [{ direction: 'rtl' }], // text direction

  //     [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //     [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //     [{ font: [] }],
  //     [{ align: [] }],

  //     ['clean']
  //   ]
  // };

  constructor(private activeRoute: ActivatedRoute, private newsfeedService: AdminNewsfeedsService, private location: Location) {}

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    this.id = isNaN(activeId) ? 0 : activeId;
    this.data = this.newsfeedService.getTempFeed(this.id)[0];
    if (this.data) {
      this.data.publishDate = new Date(this.data.publishDate);
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

  deleteTempFeed() {
    this.newsfeedService.deleteTemp(this.id);
    this.goBack();
  }
}
