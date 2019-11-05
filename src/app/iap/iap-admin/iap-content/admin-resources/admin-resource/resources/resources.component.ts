import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload'; //Original line  import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';


@Component({
  selector: 'app-resource',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourceComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      //alert('File uploaded successfully');
    };
  }

}
