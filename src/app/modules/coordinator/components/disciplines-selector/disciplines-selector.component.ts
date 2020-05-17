import { Component, OnInit } from '@angular/core';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DisciplinesDialogComponent} from '../../../../templates/disciplines-dialog/disciplines-dialog.component';

@Component({
  selector: 'app-disciplines-selector',
  templateUrl: './disciplines-selector.component.html',
  styleUrls: ['./disciplines-selector.component.css']
})
export class DisciplinesSelectorComponent implements OnInit, ConfigurableInput {

  formControl = new FormControl();
  notStable;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  applyArguments(args) {
  }

  getFormControl() {
    return this.formControl;
  }

  openDisciplinesModal(){
    let dialogRef = this.dialog.open(DisciplinesDialogComponent, {
      width: '600px',
      data: this.formControl.value
    });

    dialogRef.afterClosed().subscribe(v => {
      if (v) this.formControl.setValue(v);
    });
  }
}
