import {ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {InputBuilderService} from './input-builder/input-builder.service';
// @ts-ignore
import {getDescriptor} from './models/form-metadata';
import 'reflect-metadata';

@Component({
  selector: 'dynamic-form',
  template: `
    <form [classList]="formStyleClass" [formGroup]="dynamicForm">
      <ng-container #formContainer></ng-container>
    </form>
  `,
  styles: []
})
export class DynamicFormsComponent implements OnInit {

  @Input() formStyleClass;
  @Input() inputStyleClass;
  @Input() formDescriptor;
  dynamicForm: FormGroup;
  @ViewChild('formContainer', {read: ViewContainerRef}) private formContainer;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef,
    private inputBuilderService: InputBuilderService
  ) {
  }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {
    this.dynamicForm = this.buildGroup(this.formContainer, this.formDescriptor, 2);
    this.changeDetectorRef.detectChanges();
  }

  getResult() {
    return this.dynamicForm.value;
  }

  reset() {
    this.dynamicForm.reset('');
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
        let dynamicInput = this.inputBuilderService.buildInput(container, metadataDescriptor);
        group = dynamicInput.getFormControl();
      }
      formGroup.addControl(metadataKey, group);
    }
    return formGroup;
  }

}
