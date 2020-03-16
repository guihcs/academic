import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {StudentService} from '../../../services/student.service';
import {Student} from '../../../../../models/Student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  studentSubject: Subject<Student[]>;

  constructor(private router: Router, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentSubject = new BehaviorSubject<Student[]>(this.studentService.getUsers());


  }

  details(element) {
    this.router.navigate(['home/details/student', element.cpf]);
  }

  delete(element) {
    this.studentService.deleteUser(element);
    this.studentSubject.next(this.studentService.getUsers());
  }

}
