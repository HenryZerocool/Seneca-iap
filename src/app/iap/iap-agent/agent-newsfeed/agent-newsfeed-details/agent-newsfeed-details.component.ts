import { Component, OnInit } from '@angular/core';
import { AdminNewsfeedsService } from 'src/app/iap/iap-admin/iap-content/admin-newsfeeds/admin-newsfeeds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-newsfeed-details',
  templateUrl: './agent-newsfeed-details.component.html',
  styleUrls: ['./agent-newsfeed-details.component.css']
})
export class AgentNewsfeedDetailsComponent implements OnInit {
  data;
  id: number;
  constructor(
    private newsfeedService: AdminNewsfeedsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const test = this.activeRoute.snapshot;
    console.log(test);
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'), 10);
    if (!isNaN(activeId)) {
      this.id = activeId;
      this.data = this.newsfeedService.getNewsFeed(this.id)[0];
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
        publishDate: '',
        content: ''
      };
    }
  }
}
