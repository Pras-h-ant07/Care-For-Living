// import { TestBed } from '@angular/core/testing';

// import { SubscriptionService } from './subscription.service';

// describe('SubscriptionService', () => {
//   let service: SubscriptionService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(SubscriptionService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';

import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionService = TestBed.get(SubscriptionService);
    expect(service).toBeTruthy();
  });
});
