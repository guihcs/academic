import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-dialog',
  template: `
    <h1 mat-dialog-title>Delete User</h1>
    <div mat-dialog-content>
      <p>Are you sure?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Cancel</button>
      <button color="warn" mat-button mat-dialog-close="delete">Delete</button>
    </div>

  `
})
export class ConfirmDeleteDialog implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteDialog>,
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
