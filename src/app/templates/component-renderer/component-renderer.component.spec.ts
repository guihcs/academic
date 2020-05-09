import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRendererComponent } from './component-renderer.component';

describe('ComponentRendererComponent', () => {
  let component: ComponentRendererComponent;
  let fixture: ComponentFixture<ComponentRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
