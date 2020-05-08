import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawLabelComponent } from './raw-label.component';

describe('RawLabelComponent', () => {
  let component: RawLabelComponent;
  let fixture: ComponentFixture<RawLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
