import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoordinatorNavComponent} from './coordinator-nav.component';

describe('CoordinatorNavComponent', () => {
  let component: CoordinatorNavComponent;
  let fixture: ComponentFixture<CoordinatorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorNavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
