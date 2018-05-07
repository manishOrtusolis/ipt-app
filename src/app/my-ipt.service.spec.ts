import { TestBed, inject } from '@angular/core/testing';

import { MyIptService } from './my-ipt.service';

describe('MyIptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyIptService]
    });
  });

  it('should be created', inject([MyIptService], (service: MyIptService) => {
    expect(service).toBeTruthy();
  }));
});
