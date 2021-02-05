import { TestBed } from '@angular/core/testing';

import { RegisteredproductService } from './registeredproduct.service';

describe('RegisteredproductService', () => {
  let service: RegisteredproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
