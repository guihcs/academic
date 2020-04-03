import {TestBed} from '@angular/core/testing';

import {DynamicFormsService} from './dynamic-forms.service';

describe('DynamicFormsService', () => {
  let service: DynamicFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
