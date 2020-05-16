import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from '../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit, ConfigurableInput {


  formControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  applyArguments(args) {
    if (args.defaultValue) this.setImage(args.defaultValue);
  }

  getFormControl() {
    return this.formControl;
  }

  setImage(data){
    this.formControl.setValue(data);
  }

}
