import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../models/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input() dataObservable: Observable<User[]>;
  @Output() rowClickEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  displayedColumns = ['name', 'cpf', 'remove'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
