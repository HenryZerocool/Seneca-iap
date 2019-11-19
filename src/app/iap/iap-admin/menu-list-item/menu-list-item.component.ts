import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from '../nav-item';
import { NavService } from '../nav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  isExpanded;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(public navService: NavService) {}

  ngOnInit() {
    // this.isExpanded = this.navService.isExpanded;
    this.navService.currentExpand.subscribe(toggle => (this.isExpanded = toggle));
  }
}
