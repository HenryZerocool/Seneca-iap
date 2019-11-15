import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdminAnnouncementsService } from '../admin-announcements.service';
@Component({
  selector: 'app-admin-announcement',
  templateUrl: './admin-announcement.component.html',
  styleUrls: ['./admin-announcement.component.css']
  // styleUrls: ['../../admin-newsfeeds/admin-newsfeed/admin-newsfeed.component.css']
})
export class AdminAnnouncementComponent implements OnInit {
  id: number;
  data;

  editorStyle = {
    height: '300px'
  };
  constructor(private activeRoute: ActivatedRoute, private anService: AdminAnnouncementsService, private location: Location) {}

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    this.id = isNaN(activeId) ? 0 : activeId;
    this.data = this.anService.getTempAnnoucement(this.id)[0];
    if (this.data) {
      this.data.publishFrom = new Date(this.data.publishFrom);
      this.data.publishTo = new Date(this.data.publishTo);
    }
  }
  maxLength(e) {
    if (e.editor.getLength() > 1000) {
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  addOneAnnouncement() {
    this.anService.addOneAnnouncement(this.data);
    this.goBack();
  }

  updateOneAnnouncement() {
    this.anService.updateOneAnnouncement(this.id);
    this.goBack();
  }

  deleteOneAnnouncement() {
    this.anService.deleteOneAnnouncement(this.id);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  deleteTempAnnouncement() {
    this.anService.deleteTempAnnoucement(this.id);
    this.goBack();
  }
}
