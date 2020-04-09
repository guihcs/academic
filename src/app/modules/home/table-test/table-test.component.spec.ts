import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTestComponent } from './table-test.component';

describe('TableTestComponent', () => {
  let component: TableTestComponent;
  let fixture: ComponentFixture<TableTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
