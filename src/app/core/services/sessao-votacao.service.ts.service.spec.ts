import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SessaoVotacaoServiceTsService } from './sessao-votacao.service.ts.service';

describe('SessaoVotacaoServiceTsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let sessaoVotacaoServiceTsService: SessaoVotacaoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //imports: [HttpClientModule],
      providers: [SessaoVotacaoServiceTsService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    sessaoVotacaoServiceTsService = new SessaoVotacaoServiceTsService(
      httpClientSpy
    );
    //service = TestBed.inject(SessaoVotacaoServiceTsService);
  });

  it('should be created', () => {
    // create `getValue` spy on an object representing the ValueService
    // const valueServiceSpy = jasmine.createSpyObj('HttpClient', ['post']);

    // set the value to return when the `getValue` spy is called.
    // const stubValue = 'stub value';
    // valueServiceSpy.getValue.and.returnValue(stubValue);

    expect(sessaoVotacaoServiceTsService).toBeTruthy();
  });
});
