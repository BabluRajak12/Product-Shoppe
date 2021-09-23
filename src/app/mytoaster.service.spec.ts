import { TestBed } from '@angular/core/testing';

import { MytoasterService } from './mytoaster.service';

describe('MytoasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}
    ));

  it('should be created', () => {
    const service: MytoasterService = TestBed.get(MytoasterService);
    expect(service).toBeTruthy();
  });
});
