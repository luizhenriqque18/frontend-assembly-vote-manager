import { Component, OnInit } from '@angular/core';
import { SessaoVotacao } from './core/models/sessao-votacao.model';
import { SessaoVotacaoServiceTsService } from './core/services/sessao-votacao.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SessaoVotacaoServiceTsService],
})
export class AppComponent implements OnInit {
  constructor(private sessaoVotacaoService: SessaoVotacaoServiceTsService) {}

  data = {};
  title = 'frontend-assembly-vote-manager';

  ngOnInit(): void {
    this.sessaoVotacaoService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
}
