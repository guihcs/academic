import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {InputBuilderService} from '../../services/input-builder/input-builder.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {getDescriptor} from '../../services/input-builder/form-metadata';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, AfterViewInit {

  @Input() formStyleClass;
  @Input() inputStyleClass;
  @Input() formDescriptor;
  private dynamicForm: FormGroup;
  @ViewChild('formContainer', {read: ViewContainerRef}) private formContainer;

  constructor(private viewContainerRef: ViewContainerRef,
              private inputBuilder: InputBuilderService,
              private changeDetectorRef: ChangeDetectorRef,
              private formBuilder: FormBuilder
  ) {
  }


  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
  }

  get dynamicFormGroup() {
    return this.dynamicForm;
  }

  ngAfterViewInit(): void {
    this.dynamicForm = this.buildGroup(this.formContainer, this.formDescriptor, 2);
    this.changeDetectorRef.detectChanges();
  }

  getResult() {
    return this.dynamicForm.value;
  }

  reset() {

  }

  private buildGroup(container, descriptor, depth) {
    if (depth && depth <= 0) {
      return null;
    }
    let formGroup = new FormGroup({});
    let group;
    for (const metadataKey of Reflect.getMetadataKeys(descriptor)) {
      let metadataDescriptor = getDescriptor(descriptor, metadataKey);
      if (!metadataDescriptor) {
        continue;
      }
      if (metadataDescriptor.title) {
        let nestedObject = this.formDescriptor[metadataKey];
        let metadataDescriptor = getDescriptor(descriptor, metadataKey);
        let nestedGroup = this.buildGroup(container, nestedObject, metadataDescriptor.depth - 1);
        if (nestedGroup) {
          group = nestedGroup;
        }
      } else {
        let dynamicInput = this.inputBuilder.buildInput(container, metadataDescriptor);
        group = dynamicInput.getFormControl();
      }
      formGroup.addControl(metadataKey, group);
    }
    return formGroup;
  }

}
