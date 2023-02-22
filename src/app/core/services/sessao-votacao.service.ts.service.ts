import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessaoVotacao } from '../models/sessao-votacao.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class SessaoVotacaoServiceTsService {
  constructor(private http: HttpClient) {}

  private address_url = `${environment.api_url}/sessao-votacao`;

  //create
  public create(data: SessaoVotacao): Observable<SessaoVotacao> {
    return this.http.post<SessaoVotacao>(this.address_url, data);
  }

  //update

  //find

  public getAll(): Observable<SessaoVotacao> {
    return this.http.get<SessaoVotacao>(this.address_url);
  }
}
