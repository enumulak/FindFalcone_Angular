import { TestBed } from '@angular/core/testing';

import { FalconeService } from './falcone.service';

describe('FalconeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FalconeService = TestBed.get(FalconeService);
    expect(service).toBeTruthy();
  });
});
