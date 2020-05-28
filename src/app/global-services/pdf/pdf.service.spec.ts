import { TestBed } from '@angular/core/testing';

import { PDFService } from './pdf.service';

describe('PDFService', () => {
  let service: PDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
