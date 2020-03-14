import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorFormComponent } from './coordinator-form.component';

describe('CoordinatorFormComponent', () => {
  let component: CoordinatorFormComponent;
  let fixture: ComponentFixture<CoordinatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
