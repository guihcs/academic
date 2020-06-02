import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DisciplineFormData} from '../../../../global-models/DisciplineFormData';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {assign} from '../../../../utils/utils';
import {DynamicFormsComponent} from '@guihss/ngx-dynamic-forms';

@Component({
  selector: 'app-discipline-details',
  templateUrl: './discipline-details.component.html',
  styleUrls: ['./discipline-details.component.css']
})
export class DisciplineDetailsComponent implements OnInit {

  user: BehaviorSubject<DisciplineFormData> = new BehaviorSubject<DisciplineFormData>(null);
  pageTitle;
  @ViewChild('userForm')
  private userForm: DynamicFormsComponent;
  private backUrl;
  private userID;

  formControl = new FormControl();
  classes;
  discipline;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private router: Router
  ) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.userID = paramMap.get('id');
      let rawData = await this.backend.query('subjects', this.userID);
      let discipline1 = new DisciplineFormData();
      assign(discipline1, rawData[0], 2);
      this.discipline = discipline1;
      this.backUrl = history.state.route;
      let classes = await this.backend.getAll('classes');

      this.classes = classes.filter(v => {
        return v.course.name === discipline1.course.name && v.period === discipline1.period;
      });
    });
  }

  ngOnInit(): void {
  }

  backToList() {
    this.router.navigate([this.backUrl]);
  }




}
