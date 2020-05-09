import {
  ChangeDetectorRef,
  Component, Injector,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ComponentRendererComponent} from '../component-renderer/component-renderer.component';
import {ConfirmDeleteDialogComponent} from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css']
})
export class TabbedPaneComponent implements OnInit {

  @ViewChildren(ComponentRendererComponent) tabs: QueryList<ComponentRendererComponent>;
  config;

  private source;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private injector: Injector
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let snapshot = this.activatedRoute.snapshot;
      this.config = {
        data: snapshot.data,
        params: params
      };
      this.source = this.injector.get(snapshot.data.source);
      if(Object.keys(snapshot.data).indexOf('edit') <= 0) this.config.data.edit = true;
      this.changeDetectorRef.detectChanges();
    });
  }

  backToList() {
    this.router.navigate([this.config.data?.backUrl]);
  }

  private getObject(){
    let res = this.tabs.map( v => {
      return v.getData();
    });

    let obj = {};

    for (let i = 0; i < this.config.data.tabs.length; i++) {
      let key = this.config.data.tabs[i].name.toLowerCase();
      obj[key] = res[i];
    }

    return obj;
  }

  async updateData() {
    let obj = this.getObject();

    if (await this.source.update(obj)) {
      this.snackBar.open(this.config.data.updateMessage, '');
    } else {
      this.snackBar.open('Error.', '');
    }
  }

  async delete() {
    let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {});
    dialogRef.afterClosed().subscribe(async res => {
      if (res === 'delete') {
        if (await this.source.delete(this.getObject())) {
          this.snackBar.open(this.config.data.deleteMessage, '');
          this.backToList();
        } else {
          this.snackBar.open('Error.', '');
        }
      }
    });
  }
}
