import {Component, OnInit} from '@angular/core';
import {assign, toPascalCase} from '../../../../utils/utils';
import {Professor} from '../../../../global-models/Professor';

@Component({
  selector: 'app-insert-professor',
  templateUrl: './insert-professor.component.html',
  styleUrls: ['./insert-professor.component.css']
})
export class InsertProfessorComponent implements OnInit {

  collectionName = 'users';
  dataType = Professor;

  constructor() {
  }

  ngOnInit(): void {
  }

  async saveUser(data) {
    let user = new Professor();
    assign(user, data, 2);
    return user;
  }


}
