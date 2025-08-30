import { TestBed } from '@angular/core/testing';

import { Fund } from './fund';

describe('Fund', () => {
  let service: Fund;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fund);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
