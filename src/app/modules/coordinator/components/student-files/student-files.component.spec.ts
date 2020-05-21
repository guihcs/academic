import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFilesComponent } from './student-files.component';

describe('StudentFilesComponent', () => {
  let component: StudentFilesComponent;
  let fixture: ComponentFixture<StudentFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
