import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDeleteDialogComponent} from '../confirm-delete-dialog/confirm-delete-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {DisciplineService} from '../../modules/coordinator/services/discipline/discipline.service';
import {DisciplineDetails} from '../../global-models/DisciplineDetails';
import {SessionService} from '../../global-services/session/session.service';

@Component({
  selector: 'app-disciplines-view',
  templateUrl: './disciplines-dialog.component.html',
  styleUrls: ['./disciplines-dialog.component.css']
})
export class DisciplinesDialogComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name'];
  dataSource;
  selection = new SelectionModel<any>(true, []);

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private  data : any[],
    private disciplineService: DisciplineService,
    private sessionService: SessionService
  ) {
  }

  ngOnInit(): void {



    this.disciplineService.getAll().then(v => {
      v = v.filter(d => d.course.name === this.sessionService.getSession().course.name);
      this.dataSource = new MatTableDataSource<DisciplineDetails>(v);
      if(this.data){
        this.selection.clear();
        this.dataSource?.data?.forEach(row => {
          if (this.data.find(d => d.name === row.name)) this.selection.select(row);
        });
      }
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
