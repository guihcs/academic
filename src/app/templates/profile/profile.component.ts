import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../global-services/session/session.service';
import {BehaviorSubject, from} from 'rxjs';
import {UserDetails} from '../../global-models/user/UserDetails';
import {assign} from '../../utils/utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  session = new BehaviorSubject(null);

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    let user = new UserDetails();
    assign(user, this.sessionService.getSession(), 2);
    this.session.next(user);
  }

}
