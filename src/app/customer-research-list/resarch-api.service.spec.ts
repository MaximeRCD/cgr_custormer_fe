import { TestBed } from '@angular/core/testing';

import { ResarchApiService } from './resarch-api.service';

describe('ResarchApiService', () => {
  let service: ResarchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResarchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
