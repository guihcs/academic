import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSubjectComponent } from './details-subject.component';

describe('DetailsSubjectComponent', () => {
  let component: DetailsSubjectComponent;
  let fixture: ComponentFixture<DetailsSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
