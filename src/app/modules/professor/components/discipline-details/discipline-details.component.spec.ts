import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineDetailsComponent } from './discipline-details.component';

describe('DisciplineDetailsComponent', () => {
  let component: DisciplineDetailsComponent;
  let fixture: ComponentFixture<DisciplineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
