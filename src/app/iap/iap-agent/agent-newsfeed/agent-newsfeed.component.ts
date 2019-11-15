import { AdminNewsfeedsService } from '../../iap-admin/iap-content/admin-newsfeeds/admin-newsfeeds.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
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

  // TODO merge these conflict
  // ELEMENT_DATA: any[];
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // dataSource: MatTableDataSource<any>;

  // ngOnInit() {
  //   this.refreshData();
  //   this.paginator.pageSize = 10;
  // }

  // refreshData() {
  //   this.ELEMENT_DATA = this.service.getAllNewsFeed();
  //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  //   this.dataSource.sortingDataAccessor = (item, property) => {
  //     switch (property) {
  //       case 'publish Date':
  //         return item.publishDate;

  //       default:
  //         return item[property];
  //     }
  //   };
  //   this.dataSource.paginator = this.paginator;
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}
