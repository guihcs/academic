import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultUpdateComponent } from './default-update.component';

describe('DefaultUpdateComponent', () => {
  let component: DefaultUpdateComponent;
  let fixture: ComponentFixture<DefaultUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
