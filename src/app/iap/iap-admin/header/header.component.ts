import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  constructor() {}

  ngOnInit() {}
}
