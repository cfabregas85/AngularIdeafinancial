import { TestBed } from '@angular/core/testing';

import { CardtransationService } from './cardtransation.service';

describe('CardtransationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardtransationService = TestBed.get(CardtransationService);
    expect(service).toBeTruthy();
  });
});
