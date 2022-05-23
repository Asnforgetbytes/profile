import { TestBed } from '@angular/core/testing';

import { SearchpaisesService } from './searchpaises.service';

describe('SearchpaisesService', () => {
  let service: SearchpaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchpaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
