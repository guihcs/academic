import {ChangeDetectorRef, Component, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '../../../../global-models/DataSource';
import {DynamicFormsComponent} from '../../../../libs/dynamic-forms/dynamic-forms.component';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../../../global-services/backend/backend.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {assign} from '../../../../utils/utils';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.css']
})
export class InsertStudentComponent implements OnInit {

  @Input() dataType;
  @Input() collectionName;
  @Input() prepareDataHook: Function = this.defaultPrepareDataHook;
  @Input() pageTitle;
  @Input() successMessage;
  @Input() dataSource: DataSource;

  @ViewChild('userForm') formContainer: DynamicFormsComponent;
  data: BehaviorSubject<any> =  new BehaviorSubject(null);
  imageData;
  imagePath;

  constructor(private route: ActivatedRoute,
              private backendService: BackendService,
              private snackBar: MatSnackBar,
              private changeDetectorRef: ChangeDetectorRef,
              private injector: Injector
  ) {

  }

  ngOnInit(): void {
    if (this.dataType){
      this.data.next(new this.dataType());
    }
    this.changeDetectorRef.detectChanges();

    this.route.data?.subscribe(data => {
      if(Object.keys(data).length > 0){
        this.dataType = data.dataType;
        this.pageTitle = data.pageTitle;
        this.collectionName = data.collectionName;
        this.successMessage = data.successMessage;
        this.dataSource = this.injector.get(data.dataSource);
        if(data.prepareDataHool) this.prepareDataHook = data.prepareDataHook;
        if (this.dataType){
          this.data.next(new this.dataType());
        }
      }
    });

  }

  defaultPrepareDataHook(data){
    let dataObject = new this.dataType();
    assign(dataObject, data, 2);
    return dataObject;
  }

  async prepareData() {
    let classData = this.formContainer.getResult();
    classData = await this.prepareDataHook(classData);


    await this.saveData(classData);
  }

  isValid() {

    if (this.formContainer) {
      return this.formContainer.isValid();
    }

    return true;
  }

  private async saveData(user) {

    if (await this.dataSource.insert(user, this.imageData)) {
      this.imageData = null;
      this.imagePath = null;
      this.formContainer.reset();
      let config = new MatSnackBarConfig();
      config.panelClass = ['custom-class'];
      config.duration = 2000;
      this.snackBar.open(this.successMessage, '', config);
    } else {
      this.snackBar.open('Error.');
    }
  }


  preview(file){
    let reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file[0]);
    reader.onload = (_event) => {
      this.imageData = reader.result;
    }
  }

}
