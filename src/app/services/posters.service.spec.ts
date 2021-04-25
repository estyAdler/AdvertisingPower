import { TestBed } from '@angular/core/testing';

import { PostersService } from './posters.service';

describe('PostersService', () => {
  let service: PostersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
