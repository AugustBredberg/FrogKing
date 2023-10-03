import { TestBed } from '@angular/core/testing';

import { NumberParserService } from './number-parser.service';

describe('NumberParserService', () => {
  let service: NumberParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
