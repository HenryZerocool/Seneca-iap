import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-header',
  templateUrl: './agent-header.component.html',
  styleUrls: ['./agent-header.component.css']
})
export class AgentHeaderComponent implements OnInit {
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  constructor() {}

  ngOnInit() {}
}