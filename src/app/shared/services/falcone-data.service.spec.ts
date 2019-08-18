import { TestBed } from '@angular/core/testing';

import { FalconeDataService } from './falcone-data.service';

describe('FalconeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FalconeDataService = TestBed.get(FalconeDataService);
    expect(service).toBeTruthy();
  });
});
