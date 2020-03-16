import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {StudentService} from '../../../services/student.service';
import {Student} from '../../../../../models/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    for (const coordinator1 of this.studentService.getUsers()) {
      if (coordinator1.cpf === id) {
        this.student = coordinator1;
        break;
      }
    }
  }


  update() {

  }

}
