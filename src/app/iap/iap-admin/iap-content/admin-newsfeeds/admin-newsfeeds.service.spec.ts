import { TestBed } from '@angular/core/testing';

import { AdminNewsfeedsService } from './admin-newsfeeds.service';

describe('AdminNewsfeedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminNewsfeedsService = TestBed.get(AdminNewsfeedsService);
    expect(service).toBeTruthy();
  });
});
