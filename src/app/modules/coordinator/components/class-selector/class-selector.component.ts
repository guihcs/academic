import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../../../global-services/session/session.service';
import {ConfigurableInput} from '@guihss/ngx-dynamic-forms';
import {FormControl} from '@angular/forms';
import {ClassService} from '../../services/class/class.service';

@Component({
  selector: 'app-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.css']
})
export class ClassSelectorComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  classes;

  constructor(
    private classService: ClassService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.classService.getAll().then(c => {
      this.classes = c.filter(v => v.course?.name === this.sessionService.getSession().course?.name);
    });

  }

  applyArguments(args) {
  }

  getFormControl() {
    return this.formControl;
  }




}
