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
  @Input() formObject;
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
    this.dynamicForm = this.buildGroup(this.formContainer, this.formObject, 2);
    this.changeDetectorRef.detectChanges();
  }

  getResult() {
    return this.dynamicForm.value;
  }

  reset() {
    this.dynamicForm.reset('');
  }

  private buildGroup(container, formObject, depth) {
    if (depth && depth <= 0) {
      return null;
    }
    let formGroup = new FormGroup({});

    for (const decoratedPropertyName of Reflect.getMetadataKeys(formObject)) {

      let metadataDescriptor = getDescriptor(formObject, decoratedPropertyName);
      if (!metadataDescriptor) {
        continue;
      }

      let group = this.buildInput(metadataDescriptor, decoratedPropertyName, formObject, container);
      formGroup.addControl(decoratedPropertyName, group);
    }
    return formGroup;
  }

  private buildInput(inputConfig, decoratedPropertyName, formObject, container) {
    let group;
    switch (inputConfig.type) {

      case 'nested-input': {
        let nestedObject = this.formObject[decoratedPropertyName];
        let metadataDescriptor = getDescriptor(formObject, decoratedPropertyName);
        let nestedGroup = this.buildGroup(container, nestedObject, metadataDescriptor.depth - 1);
        if (nestedGroup) {
          group = nestedGroup;
        }
        break;
      }

      case 'custom-input': {

        let input = this.inputBuilderService.buildCustomInput(container, inputConfig, inputConfig.component);
        group = input.getFormControl();

        break;
      }

      case 'label': {
        let dynamicInput = this.inputBuilderService.buildLabel(container, inputConfig);
        group = dynamicInput.getFormControl();
        break;
      }
      default: {
        let dynamicInput = this.inputBuilderService.buildInput(container, inputConfig);
        group = dynamicInput.getFormControl();
      }
    }

    return group;
  }
}
