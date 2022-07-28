import { TestBed } from '@angular/core/testing';

import { Child1FormServiceService } from './child1-form-service.service';

describe('Child1FormServiceService', () => {
  let service: Child1FormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Child1FormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
