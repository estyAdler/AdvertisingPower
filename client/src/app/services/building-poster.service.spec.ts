import { TestBed } from '@angular/core/testing';

import { BuildingPosterService } from './building-poster.service';

describe('BuildingPosterService', () => {
  let service: BuildingPosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingPosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
