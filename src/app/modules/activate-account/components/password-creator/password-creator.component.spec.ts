import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCreatorComponent } from './password-creator.component';

describe('PasswordCreatorComponent', () => {
  let component: PasswordCreatorComponent;
  let fixture: ComponentFixture<PasswordCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
