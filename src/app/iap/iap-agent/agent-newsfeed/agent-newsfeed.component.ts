import { Component, OnInit } from '@angular/core';
import { AdminNewsfeedsService } from '../../iap-admin/iap-content/admin-newsfeeds/admin-newsfeeds.service';

@Component({
  selector: 'app-agent-newsfeed',
  templateUrl: './agent-newsfeed.component.html',
  styleUrls: ['./agent-newsfeed.component.css']
})
export class AgentNewsfeedComponent implements OnInit {
  data;
  constructor(private newsfeedService: AdminNewsfeedsService) {}

  ngOnInit() {
    this.data = this.newsfeedService.getAllNewsFeed();
    console.log(this.data);
  }
}
