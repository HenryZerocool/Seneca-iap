import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminAnnouncementsService } from '../../admin-announcements.service';

@Component({
  selector: 'app-announcement-preview',
  templateUrl: './announcement-preview.component.html',
  styleUrls: ['./announcement-preview.component.css']
})
export class AnnouncementPreviewComponent implements OnInit {
  id: number;
  data;
  constructor(private anService: AdminAnnouncementsService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    this.id = isNaN(activeId) ? 0 : activeId;
    this.data = this.anService.getTempAnnoucement(this.id)[0];
    if (this.data) {
      this.data.publishFrom = new Date(this.data.publishFrom);
      this.data.publishTo = new Date(this.data.publishTo);
    }
  }
}
