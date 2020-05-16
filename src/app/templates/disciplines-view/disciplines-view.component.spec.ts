import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesViewComponent } from './disciplines-view.component';

describe('DisciplinesViewComponent', () => {
  let component: DisciplinesViewComponent;
  let fixture: ComponentFixture<DisciplinesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
