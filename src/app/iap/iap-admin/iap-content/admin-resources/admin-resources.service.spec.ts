import { TestBed } from '@angular/core/testing';

import { AdminResourcesService } from './admin-resources.service';

describe('AdminResourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminResourcesService = TestBed.get(AdminResourcesService);
    expect(service).toBeTruthy();
  });
});
