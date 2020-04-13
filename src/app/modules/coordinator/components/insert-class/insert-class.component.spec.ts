import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClassComponent } from './insert-class.component';

describe('InsertClassComponent', () => {
  let component: InsertClassComponent;
  let fixture: ComponentFixture<InsertClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
