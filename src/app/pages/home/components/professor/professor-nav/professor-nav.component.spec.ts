import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfessorNavComponent} from './professor-nav.component';

describe('ProfessorNavComponent', () => {
  let component: ProfessorNavComponent;
  let fixture: ComponentFixture<ProfessorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
