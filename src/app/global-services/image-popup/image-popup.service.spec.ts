import { TestBed } from '@angular/core/testing';

import { ImagePopupService } from './image-popup.service';

describe('ImagePopupService', () => {
  let service: ImagePopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagePopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
