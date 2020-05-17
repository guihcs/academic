import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {DisciplineService} from '../../modules/coordinator/services/discipline/discipline.service';
import {MatTableDataSource} from '@angular/material/table';
import {StudentService} from '../../global-services/student/student.service';

@Component({
  selector: 'app-disciplines-view',
  templateUrl: './disciplines-view.component.html',
  styleUrls: ['./disciplines-view.component.css']
})
export class DisciplinesViewComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name'];
  dataSource;
  selection = new SelectionModel<any>(true, []);
  data;

  constructor(
    private disciplineService: DisciplineService,
    private studentService: StudentService
  ) { }
  ngOnInit(): void {

    this.initialize();
  }

  async initialize(){
    let student = await this.studentService.queryStudent(this.data.params.id);

    let disciplines = await this.disciplineService.getAll();

    this.selection.clear();

    disciplines.forEach(v => {
      if (student.disciplines.find(d => d.name === v.name)){
        this.selection.select(v);
      }
    });

    this.dataSource = new MatTableDataSource(disciplines);
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


  getData(){
    return this.selection.selected;
  }
}
