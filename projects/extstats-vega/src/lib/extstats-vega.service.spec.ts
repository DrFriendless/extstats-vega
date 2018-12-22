import { TestBed, inject } from '@angular/core/testing';

import { ExtstatsVegaService } from './extstats-vega.service';

describe('ExtstatsVegaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtstatsVegaService]
    });
  });

  it('should be created', inject([ExtstatsVegaService], (service: ExtstatsVegaService) => {
    expect(service).toBeTruthy();
  }));
});
