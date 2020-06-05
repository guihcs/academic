import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatProgressBar, ProgressBarMode} from '@angular/material/progress-bar';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() file;
  @Output() fileSelect = new EventEmitter();
  uploading;
  mode: ProgressBarMode = 'indeterminate';
  @ViewChild('progress', {static: true}) progress: MatProgressBar;

  value = new BehaviorSubject(0);


  constructor() {
  }

  ngOnInit(): void {

    this.file.uploading.subscribe(v => {
      if (!v) {
        return;
      }

      this.mode = 'determinate';

      this.file.progress.subscribe(v => {
        this.value.next(v * 100);
      });
    });

  }
}
