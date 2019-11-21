import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;

  constructor() {}

  ngOnInit() {}
}
