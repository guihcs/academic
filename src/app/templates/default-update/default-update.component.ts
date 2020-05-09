import {Component, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../libs/dynamic-forms/dynamic-forms.component';
import {DataSource} from '../../global-models/DataSource';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../global-services/backend/backend.service';
import {BehaviorSubject} from 'rxjs';
import {assign} from '../../utils/utils';

@Component({
  selector: 'app-default-update',
  templateUrl: './default-update.component.html',
  styleUrls: ['./default-update.component.css']
})
export class DefaultUpdateComponent implements OnInit {

  dataDescriptor = new BehaviorSubject(null);

  @ViewChild('dynamicFormsComponent')
  private dynamicFormsComponent: DynamicFormsComponent;
  private dataID;
  private dataSource:DataSource;
  private data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    private router: Router,
    private injector: Injector
  ) {

  }

  ngOnInit(): void {
    this.dataSource = this.injector.get(this.data.source);
    this.dataID = this.data.params.id;

    this.dataSource.queryOne(this.dataID).then(value => {
      this.dataDescriptor.next(value);
    });

  }

  getData(){
    let obj = this.dataDescriptor.getValue();
    assign(obj, this.dynamicFormsComponent.getResult(), 3);
    return obj;
  }
}
