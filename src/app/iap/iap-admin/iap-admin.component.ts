import { Component, OnInit } from '@angular/core';
import {NavService} from './nav.service';

@Component({
  selector: 'app-iap-admin',
  templateUrl: './iap-admin.component.html',
  styleUrls: ['./iap-admin.component.css']
})
export class IapAdminComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
  }

}
