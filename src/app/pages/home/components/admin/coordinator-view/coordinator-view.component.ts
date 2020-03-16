import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Coordinator} from '../../../../../models/Coordinator';
import {BehaviorSubject, Subject} from 'rxjs';
import {CoordinatorService} from '../../../services/coordinator.service';

@Component({
  selector: 'app-coordinator-view',
  templateUrl: './coordinator-view.component.html',
  styleUrls: ['./coordinator-view.component.css']
})
export class CoordinatorViewComponent implements OnInit {

  coordinators: Subject<Coordinator[]>;

  constructor(private router: Router, private coordinatorService: CoordinatorService) {
  }

  ngOnInit(): void {
    this.coordinators = new BehaviorSubject<Coordinator[]>(this.coordinatorService.getUsers());


  }

  details(element) {
    this.router.navigate(['home/details/coordinator', element.cpf]);
  }

  delete(element) {
    this.coordinatorService.deleteUser(element);
    this.coordinators.next(this.coordinatorService.getUsers());
  }

}
