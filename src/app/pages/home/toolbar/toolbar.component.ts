import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SessionService} from '../../../services/session/session.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() menuEvent = new EventEmitter();
  userName;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.userName = this.sessionService.getSession().name[0];
  }

}
