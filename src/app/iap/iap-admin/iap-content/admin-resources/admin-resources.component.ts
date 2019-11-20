import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AdminResourcesService } from './admin-resources.service';

@Component({
  selector: 'app-admin-resources',
  templateUrl: './admin-resources.component.html',
  styleUrls: ['../admin-announcements/admin-announcements.component.css']
  // styleUrls: ['./admin-resources.component.css']
})
export class AdminResourcesComponent implements OnInit {
  ELEMENT_DATA: any[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild('PostEditBox', { static: true }) PostEditBox: TemplateRef<any>;
  displayedColumns: string[] = ['status', 'priority', 'displayName', 'source', 'publishDate', 'lastModifiedBy', 'id', 'Delete'];
  dataSource: MatTableDataSource<any>;
  constructor(private service: AdminResourcesService) {}
  ngOnInit() {
    this.ELEMENT_DATA = this.service.getAllResources();
    this.refreshData();
    this.paginator.pageSize = 10;
  }

  refreshData() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePost(id: number) {
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter(data => data.id !== id);
    this.refreshData();
  }
}
