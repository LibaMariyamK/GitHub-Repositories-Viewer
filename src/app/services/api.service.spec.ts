import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', ()=> {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should be created :ApiService', inject([ApiService],(service: ApiService)=> {
          expect(service).toBeTruthy();
        }));
  });