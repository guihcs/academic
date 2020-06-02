import {Component, Injector, OnInit} from '@angular/core';
import {ConfigurableInput} from '@guihss/ngx-dynamic-forms';
import {FormControl} from '@angular/forms';
import {DataSource} from '../../global-models/DataSource';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.css']
})
export class DataSelectorComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  control = new FormControl();
  data;
  dataSource: DataSource;
  dataMapping;
  displayProperty;

  constructor(
    private injector: Injector
  ) { }

  ngOnInit(): void {
  }

  applyArguments(args) {
    let args1 = args.descriptor.args;
    this.dataMapping = args1.dataMapping;
    this.dataSource = this.injector.get(args1.dataSource);
    this.displayProperty = args1.displayProperty;

    this.formControl.valueChanges.subscribe(v => {
      this.control.setValue(this.dataMapping(v));
    })

    this.dataSource.getAll().then(data => {
      this.data = data;

      if (args.defaultValue){
        let v = this.data.find(v => {
          return v[this.displayProperty] === args.defaultValue[this.displayProperty];
        });

        this.formControl.setValue(v);
      }
    });


  }

  getFormControl() {
    return this.control;
  }

}
