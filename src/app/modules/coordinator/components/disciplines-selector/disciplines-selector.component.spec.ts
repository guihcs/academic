import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesSelectorComponent } from './disciplines-selector.component';

describe('DisciplinesSelectorComponent', () => {
  let component: DisciplinesSelectorComponent;
  let fixture: ComponentFixture<DisciplinesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
