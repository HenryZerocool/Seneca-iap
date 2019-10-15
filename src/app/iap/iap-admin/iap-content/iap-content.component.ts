import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iap-content',
  templateUrl: './iap-content.component.html',
  styleUrls: ['./iap-content.component.css']
})
export class IapContentComponent implements OnInit {
  title = 'content';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'announcements',
        link: './announcements',
        index: 0
      },
      {
        label: 'newsfeed',
        link: './newsfeed',
        index: 1
      },
      {
        label: 'resources',
        link: './resources',
        index: 2
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === '.' + this.router.url)
      );
    });
  }
}
