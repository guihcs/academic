import {Component, OnInit, ViewChild} from '@angular/core';
import {FileService} from '../../../../global-services/file/file.service';
import {SessionService} from '../../../../global-services/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-files',
  templateUrl: './student-files.component.html',
  styleUrls: ['./student-files.component.css']
})
export class StudentFilesComponent implements OnInit {

  dataSource;
  @ViewChild('link', {read: HTMLAnchorElement, static: true})
  private a;

  constructor(
    private fileService: FileService,
    private sessionService: SessionService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    this.dataSource = await this.fileService.getAll();

  }


  async download(element, link){

    let file = await this.fileService.download(element);

    let url = window.URL.createObjectURL(file);
    link.href = url;
    link.download = element.filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }

}
