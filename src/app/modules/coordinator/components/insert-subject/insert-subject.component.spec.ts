import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSubjectComponent } from './insert-subject.component';

describe('InsertSubjectComponent', () => {
  let component: InsertSubjectComponent;
  let fixture: ComponentFixture<InsertSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
