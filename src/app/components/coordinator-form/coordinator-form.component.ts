import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-coordinator-form',
  templateUrl: './coordinator-form.component.html',
  styleUrls: ['./coordinator-form.component.css']
})
export class CoordinatorFormComponent implements OnInit {

  insertCoordinatorForm;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.insertCoordinatorForm = this.formBuilder.group({});
  }

}
