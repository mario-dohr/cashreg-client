import { TestBed } from '@angular/core/testing';

import { BelegService } from './beleg.service';

describe('BelegService', () => {
  let service: BelegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BelegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
