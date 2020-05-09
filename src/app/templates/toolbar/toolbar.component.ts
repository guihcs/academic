import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SessionService} from '../../global-services/session/session.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() menuEvent = new EventEmitter();
  @Input() userName;

  constructor(
    private sessionService: SessionService
  ) {
  }

  ngOnInit(): void {
    this.userName = this.sessionService.getSession().name[0];
  }

}
