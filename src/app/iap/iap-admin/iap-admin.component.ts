import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-iap-admin',
  templateUrl: './iap-admin.component.html',
  styleUrls: ['./iap-admin.component.css']
})
export class IapAdminComponent implements OnInit {
  navData = [
    {
      label: 'Home',
      index: 1,
      icon: 'home'
      // children: [
      //   {
      //     label: 'child 1',
      //     index: 1
      //   },
      //   {
      //     label: 'child 2',
      //     index: 2
      //   }
      // ]
    },
    {
      label: 'IWA',
      index: 2,
      icon: 'folder_shared',
      children: [
        {
          label: 'Academic'
        },
        {
          label: 'Applications'
        }
      ]
    },
    {
      label: 'Content',
      index: 5,
      icon: 'rss_feed',
      children: [
        {
          label: 'Announcement'
        },
        {
          label: 'Newsfeed'
        },
        {
          label: 'Resources'
        }
      ]
    },
    {
      label: 'Logout',
      index: 9,
      icon: 'exit_to_app'
    }
  ];
  constructor(private navService: NavService) {}

  ngOnInit() {}
}
