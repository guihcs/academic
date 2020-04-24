import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDisciplinesComponent } from './professor-disciplines.component';

describe('ProfessorDisciplinesComponent', () => {
  let component: ProfessorDisciplinesComponent;
  let fixture: ComponentFixture<ProfessorDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
