import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {InputBuilderService} from '../../services/input-builder/input-builder.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, AfterViewInit {

  @Input() formClass;
  @Input() inputClass;
  @Input() formDescriptor;
  dynamicForm;
  @ViewChild('formContainer', {read: ViewContainerRef}) private formContainer;
  private value = {};

  constructor(private viewContainerRef: ViewContainerRef,
              private inputBuilder: InputBuilderService,
              private changeDetectorRef: ChangeDetectorRef,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {

    for (const key of Object.keys(this.formDescriptor)) {
      let args = this.formDescriptor[key];
      if (!args.label) {
        args.label = key;
      }
      args.value = this.value[key];
      args.class = this.inputClass;

      let dynamicControl = this.inputBuilder.buildInput(this.formContainer, this.formDescriptor[key]?.type, args);

      this.dynamicForm.addControl(key, dynamicControl.getFormControl());
    }

    this.changeDetectorRef.detectChanges();
  }

  getResult() {
    return this.dynamicForm.value;
  }

  reset() {
    this.dynamicForm.reset();
  }

}
