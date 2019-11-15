import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminNewsfeedsService } from '../../admin-newsfeeds.service';

@Component({
  selector: 'app-newsfeed-preview',
  templateUrl: './newsfeed-preview.component.html',
  styleUrls: ['./newsfeed-preview.component.css']
})
export class NewsfeedPreviewComponent implements OnInit {
  data;
  id: number;
  constructor(private newsfeedService: AdminNewsfeedsService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    this.id = isNaN(activeId) ? 0 : activeId;
    this.data = this.newsfeedService.getTempFeed(this.id)[0];
    if (this.data) {
      this.data.publishDate = new Date(this.data.publishDate);
    }
  }
}
