import { TestBed } from '@angular/core/testing';

import { UfoServiceService } from './ufo-service.service';

describe('UfoServiceService', () => {
  let service: UfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
