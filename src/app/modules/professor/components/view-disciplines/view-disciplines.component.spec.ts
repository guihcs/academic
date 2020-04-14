import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDisciplinesComponent } from './view-disciplines.component';

describe('ViewDisciplinesComponent', () => {
  let component: ViewDisciplinesComponent;
  let fixture: ComponentFixture<ViewDisciplinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDisciplinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
