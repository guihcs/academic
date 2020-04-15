import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DynamicFormsComponent} from '../../libs/dynamic-forms/dynamic-forms.component';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../global-services/backend/backend.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  @Input() dataType;
  @Input() collectionName;
  @Input() prepareDataHook;
  @Input() injectedData;

  @ViewChild('userForm') formContainer: DynamicFormsComponent;
  userType;

  user: BehaviorSubject<any>;
  course;

  constructor(private route: ActivatedRoute,
              private backendService: BackendService,
              private snackBar: MatSnackBar,
              private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.user = new BehaviorSubject(new this.dataType());
    this.changeDetectorRef.detectChanges();
  }


  async saveClass() {
    let classData = this.formContainer.getResult();
    if (this.prepareDataHook) classData = await this.prepareDataHook(classData, this.injectedData);
    await this.saveUserAPI(classData);
  }

  isValid() {
    if (this.formContainer) {
      return this.formContainer.isValid();
    }

    return false;
  }

  private async saveUserAPI(user) {
    if (await this.backendService.persist(this.collectionName, user)) {
      this.formContainer.reset();
      this.snackBar.open('User Inserted.', '', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Error.');
    }
  }
}
