import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesDialogComponent } from './disciplines-dialog.component';

describe('DisciplinesViewComponent', () => {
  let component: DisciplinesDialogComponent;
  let fixture: ComponentFixture<DisciplinesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
