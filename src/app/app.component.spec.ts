import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SessaoVotacaoServiceTsService } from './core/services/sessao-votacao.service.ts.service';

describe('AppComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let sessaoVotacaoServiceTsService: SessaoVotacaoServiceTsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [SessaoVotacaoServiceTsService],
      declarations: [AppComponent],
    }).compileComponents();

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    sessaoVotacaoServiceTsService = new SessaoVotacaoServiceTsService(
      httpClientSpy
    );
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend-assembly-vote-manager'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend-assembly-vote-manager');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'frontend-assembly-vote-manager app is running!'
    );
  });

  it('should be created a SessaoVotacaoServiceTsService', () => {
    expect(sessaoVotacaoServiceTsService).toBeTruthy();
  });
});
