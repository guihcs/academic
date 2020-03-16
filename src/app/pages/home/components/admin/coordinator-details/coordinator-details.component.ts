import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Coordinator} from '../../../../../models/Coordinator';
import {FormBuilder} from '@angular/forms';
import {CoordinatorService} from '../../../services/coordinator.service';

@Component({
  selector: 'app-coordinator-details',
  templateUrl: './coordinator-details.component.html',
  styleUrls: ['./coordinator-details.component.css']
})
export class CoordinatorDetailsComponent implements OnInit {

  coordinator: Coordinator;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private coordinatorService: CoordinatorService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    for (const coordinator1 of this.coordinatorService.getUsers()) {
      if (coordinator1.cpf === id) {
        this.coordinator = coordinator1;
        break;
      }
    }
  }


  update() {

  }

}
