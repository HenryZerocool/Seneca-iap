<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
=======
import { NavService } from './../nav.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../nav-item';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
>>>>>>> master

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  constructor(public router: Router, public navService: NavService) {}
  @Input() item: NavItem;
  isExpanded = false;
  expanded: boolean;

  navItems: NavItem[] = [
    {
      iconName: 'home',
      displayName: 'Home',
      route: 'home'
    },
    {
      iconName: 'person',
      displayName: 'Agents',
      route: 'home'
    },

    {
      iconName: 'rss_feed',
      displayName: 'Content',
      route: 'content/announcements',
      children: [
        {
          displayName: 'Announcement',
          route: 'content/announcements'
        },
        {
          displayName: 'Newsfeed',
          route: 'content/newsfeed'
        },
        {
          displayName: 'Resources',
          route: 'content/resources'
        }
      ]
    }
  ];

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  isExpanded = true;
  ngOnInit() {}
}
