import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AdminAnnouncementsService } from './admin-announcements.service';

@Component({
  selector: 'app-admin-announcements',
  templateUrl: './admin-announcements.component.html',
  styleUrls: ['./admin-announcements.component.css']
})
export class AdminAnnouncementsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = [
    'status',
    'priority',
    'title',
    'publish FROM',
    'publish TO',
    'lastModifier',
    'lastModifiedTime',
    'id',
    'Delete'
  ];
  dataSource: MatTableDataSource<any>;
  dataBase;
  constructor(public anService: AdminAnnouncementsService) {}

  ngOnInit() {
    this.refreshData();
    this.paginator.pageSize = 10;
  }

  refreshData() {
    this.dataBase = this.anService.getAllAnnouncements();
    this.dataSource = new MatTableDataSource(this.dataBase);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'publish FROM':
          return item.publishFrom;
        case 'publish TO':
          return item.publishTo;
        default:
          return item[property];
      }
    };
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePost(id: number) {
    this.dataBase = this.dataBase.filter(data => data.id !== id);
    this.refreshData();
  }
}
