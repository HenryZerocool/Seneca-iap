import { TestBed } from '@angular/core/testing';

import { AdminAnnouncementsService } from './admin-announcements.service';

describe('AdminAnnouncementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAnnouncementsService = TestBed.get(AdminAnnouncementsService);
    expect(service).toBeTruthy();
  });
});
