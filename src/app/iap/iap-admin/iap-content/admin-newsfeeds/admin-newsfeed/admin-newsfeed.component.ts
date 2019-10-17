import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminNewsfeedsService } from '../admin-newsfeeds.service';

@Component({
  selector: 'app-admin-newsfeed',
  templateUrl: './admin-newsfeed.component.html',
  styleUrls: ['./admin-newsfeed.component.css']
})
export class AdminNewsfeedComponent implements OnInit {
  id: number;
  data;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: AdminNewsfeedsService
  ) {}

  ngOnInit() {
    const activeId = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.id = isNaN(activeId) ? 0 : activeId;
    this.data = this.service.getNewsFeed(this.id)[0];
    console.log(this.data);
  }
}
