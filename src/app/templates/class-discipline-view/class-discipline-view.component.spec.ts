import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDisciplineViewComponent } from './class-discipline-view.component';

describe('ClassDisciplineViewComponent', () => {
  let component: ClassDisciplineViewComponent;
  let fixture: ComponentFixture<ClassDisciplineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDisciplineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDisciplineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
