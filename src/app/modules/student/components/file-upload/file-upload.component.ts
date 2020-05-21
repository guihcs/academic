import { Component, OnInit } from '@angular/core';
import {FileService} from '../../../../global-services/file/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit(): void {
  }

  async upload(files){
    await this.fileService.upload(files);
  }
}
