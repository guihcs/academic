import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../confirm-delete-dialog/confirm-delete-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {DisciplineService} from '../../modules/coordinator/services/discipline/discipline.service';
import {DisciplineDetails} from '../../global-models/DisciplineDetails';

@Component({
  selector: 'app-disciplines-view',
  templateUrl: './disciplines-view.component.html',
  styleUrls: ['./disciplines-view.component.css']
})
export class DisciplinesViewComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name'];
  dataSource;
  selection = new SelectionModel<any>(true, []);

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private disciplineService: DisciplineService
  ) {
  }

  ngOnInit(): void {
    this.disciplineService.getAll().then(v => {
      this.dataSource = new MatTableDataSource<DisciplineDetails>(v);
    });

  }




  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource?.data?.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  cancel() {
    this.dialogRef.close();
  }

}
