import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html'
})
export class ConfirmDeleteDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();
  }


  remove() {

  }

}
