import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu-list',
  templateUrl: './sub-menu-list.component.html',
  styleUrls: ['../menu-list-item.component.css']
  // styleUrls: ['./sub-menu-list.component.css']
})
export class SubMenuListComponent implements OnInit {
  @Input() showSubmenu;
  @Input() navDatas;
  @Input() isExpanded;
  constructor() {}

  ngOnInit() {
    console.log(this.navDatas, 'navdatas');
  }
}
