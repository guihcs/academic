import {TestBed} from '@angular/core/testing';

import {InputBuilderService} from './input-builder.service';

describe('InputBuilderService', () => {
  let service: InputBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
