/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuperGameService } from './super-game.service';

describe('Service: SuperGame', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperGameService]
    });
  });

  it('should ...', inject([SuperGameService], (service: SuperGameService) => {
    expect(service).toBeTruthy();
  }));
});
