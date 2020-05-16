import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {getDescriptor} from './models/form-metadata';
import {FormBuilder, FormGroup} from '@angular/forms';
import {InputBuilderService} from './input-builder/input-builder.service';
import {Observable} from 'rxjs';
import {RawLabelComponent} from './inputs/raw-label/raw-label.component';
import {toPascalCase} from '../../utils/utils';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit, AfterViewInit {

  @Input() formStyleClass;
  @Input() inputStyleClass;
  @Input() objectObservable: Observable<any>;
  dynamicForm: FormGroup;
  @ViewChild('formContainer', {read: ViewContainerRef}) private formContainer: ViewContainerRef;

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

    this.objectObservable.subscribe(object => {

      if (object) {
        this.formContainer.clear();
        this.dynamicForm = this.buildGroup(this.formContainer, object, 2);
        this.changeDetectorRef.detectChanges();
      }
    });

  }

  isValid() {
    // return this.dynamicForm.valid;
    return true;
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

    let group: FormGroup;
    switch (inputConfig.type) {

      case 'nested-input': {
        let nestedObject = formObject[decoratedPropertyName];
        let metadataDescriptor = getDescriptor(formObject, decoratedPropertyName);

        this.inputBuilderService.buildCustomInput(container, {
          label: toPascalCase(decoratedPropertyName)
        }, RawLabelComponent);

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
