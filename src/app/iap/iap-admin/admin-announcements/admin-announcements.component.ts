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
    title: 'Hydrogen',
    status: 'active',
    lastModifier: 'H',
    publishFrom: '09/12/2018',
    publishTo: '10/30/2019',
    id: 1
  },
  {
    priority: 2,
    title: 'Helium This is a very long title loseimgs covpoiewnf qivjciv d',
    status: 'closed',
    lastModifier: 'He',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 2
  },
  {
    priority: 3,
    title: 'Lithium',
    status: 'active',
    lastModifier: 'Li',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 3
  },
  {
    priority: 4,
    title: 'Beryllium',
    status: 'closed',
    lastModifier: 'Be',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 4
  },
  {
    priority: 5,
    title: 'Boron',
    status: 'active',
    lastModifier: 'B',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 5
  },
  {
    priority: 6,
    title: 'Carbon',
    status: 'closed',
    lastModifier: 'C',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 6
  },
  {
    priority: 7,
    title: 'Nitrogen',
    status: 'active',
    lastModifier: 'N',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 7
  },
  {
    priority: 8,
    title: 'Oxygen',
    status: 'closed',
    lastModifier: 'O',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 8
  },
  {
    priority: 9,
    title: 'Fluorine',
    status: 'active',
    lastModifier: 'F',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 9
  },
  {
    priority: 10,
    title: 'Neon',
    status: 'closed',
    lastModifier: 'Ne',
    publishFrom: '10/12/2018',
    publishTo: '10/30/2019',
    id: 10
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
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  refreshData() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePost(id: number) {
    ELEMENT_DATA = ELEMENT_DATA.filter(data => data.id !== id);
    this.refreshData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.PostEditBox, {
      width: '90vw'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
