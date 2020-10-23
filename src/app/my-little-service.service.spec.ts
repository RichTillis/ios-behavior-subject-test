import { TestBed } from '@angular/core/testing';

import { MyLittleServiceService } from './my-little-service.service';

describe('MyLittleServiceService', () => {
  let service: MyLittleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLittleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
