import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @Input() file;
  @Output() fileSelect = new EventEmitter();
  downloading;

  @ViewChild('progress', {static: true}) progress: MatProgressBar;

  value = new BehaviorSubject(0);


  constructor() {
  }

  ngOnInit(): void {
    this.fileSelect.subscribe(file => {

      this.downloading = true;

      file.progress.subscribe(async v => this.value.next(v * 100));

    });
  }


}
