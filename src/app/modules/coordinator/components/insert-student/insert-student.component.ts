import {Component, OnInit} from '@angular/core';
import {assign} from '../../../../utils/utils';
import {StudentFormData} from '../../../../global-models/StudentFormData';
import {Student} from '../../../../global-models/Student';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent implements OnInit {

  collectionName = 'users';
  dataType = StudentFormData;

  constructor() {
  }

  ngOnInit(): void {
  }

  async saveUser(data) {
    let user = new StudentFormData();
    assign(user, data, 3);
    return user;
  }

}
