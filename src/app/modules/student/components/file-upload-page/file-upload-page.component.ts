import {Component, OnInit} from '@angular/core';
import {FileService} from '../../../../global-services/file/file.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-file-upload-page',
  templateUrl: './file-upload-page.component.html',
  styleUrls: ['./file-upload-page.component.css']
})
export class FileUploadPageComponent implements OnInit {

  files;

  constructor(
    private fileService: FileService
  ) {
  }

  ngOnInit(): void {
  }

  async upload(files) {

    for (const file of files) {
      file.uploading = new BehaviorSubject(false);
      file.progress = new BehaviorSubject(0);
    }

    this.files = files;

    for (const file of this.files) {
      file.uploading.next(true);
      await this.fileService.upload(file);
    }

  }
}
