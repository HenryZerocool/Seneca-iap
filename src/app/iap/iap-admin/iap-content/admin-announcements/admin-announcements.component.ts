import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  TemplateRef
} from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

export interface PeriodicElement {
  id: number;
  title: string;
  priority: number;
  status: string;
  lastModifier: string;
  publishFrom?: string;
  publishTo?: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {
    priority: 1,
    title: 'Career Connect Is Here',
    status: 'Active',
    publishFrom: 'Sep 30, 2019',
    publishTo: 'Oct 31, 2019',
    lastModifier: 'Shirley Mangallon',
    id: 1
  },
  {
    priority: 2,
    title: 'May 2020 Intake Opens Aug. 26th',
    status: 'Active',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    lastModifier: 'Shirley Mangallon',
    id: 2
  },
  {
    priority: 10,
    title: 'All Programs Are Now Closed For January 2019',
    status: 'Closed',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    lastModifier: 'Shirley Mangallon',
    id: 3
  }
];

@Component({
  selector: 'app-admin-announcements',
  templateUrl: './admin-announcements.component.html',
  styleUrls: ['./admin-announcements.component.css']
})
export class AdminAnnouncementsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild('PostEditBox', { static: true }) PostEditBox: TemplateRef<any>;
  displayedColumns: string[] = [
    'priority',
    'title',
    'status',
    'publish FROM',
    'publish TO',
    'lastModifier',
    'id',
    'Delete'
  ];
  dataSource: MatTableDataSource<any>;
  constructor(private dialog: MatDialog) {}
  ngOnInit() {
    this.refreshData();
    this.paginator.pageSize = 10;
  }

  refreshData() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePost(id: number) {
    ELEMENT_DATA = ELEMENT_DATA.filter(data => data.id !== id);
    this.refreshData();
  }
}
