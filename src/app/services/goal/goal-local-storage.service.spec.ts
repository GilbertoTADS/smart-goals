import { TestBed } from '@angular/core/testing';

import { GoalLocalStorageService } from './goal-local-storage.service';

describe('GoalLocalStorageService', () => {
  let service: GoalLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
