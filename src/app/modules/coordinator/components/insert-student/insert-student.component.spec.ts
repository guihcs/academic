import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStudentComponent } from './insert-student.component';

describe('InsertStudentComponent', () => {
  let component: InsertStudentComponent;
  let fixture: ComponentFixture<InsertStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
