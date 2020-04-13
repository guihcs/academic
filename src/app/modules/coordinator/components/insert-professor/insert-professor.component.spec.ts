import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProfessorComponent } from './insert-professor.component';

describe('InsertProfessorComponent', () => {
  let component: InsertProfessorComponent;
  let fixture: ComponentFixture<InsertProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
