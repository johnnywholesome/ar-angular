import { ServiceHandlerService  } from './service-handler.service';
import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BlockUIService } from '@ar-angular/shared/services/block-ui.service';


describe('ServiceHandlerService ', () => {
    let service: ServiceHandlerService ;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        declarations: [ServiceHandlerService],
        providers: [
            ServiceHandlerService, Router, BlockUIService ]
      });
      service = TestBed.get(ServiceHandlerService );
    });

    // fit('should create an instance ', () => {
    //  expect(service).toBeTruthy();
    // });
});
