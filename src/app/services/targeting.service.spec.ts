import { TestBed } from '@angular/core/testing';

import { TargetingService } from './targeting.service';

describe('TargetingService', () => {
  let service: TargetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
