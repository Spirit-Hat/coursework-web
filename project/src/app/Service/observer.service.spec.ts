import { TestBed } from '@angular/core/testing';

import { ShoppingCard } from './ShoppingCard';

describe('ObserverService', () => {
  let service: ShoppingCard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
