import { MarcacaoService } from './../../../../services/marcacao.service';
import { Marcacao } from 'src/app/models/marcacao';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-marcacao',
  templateUrl: './listar-marcacao.component.html',
  styleUrls: ['./listar-marcacao.component.css']
})
export class ListarMarcacaoComponent implements OnInit {

    public marcacoes: Marcacao[] = [];

  constructor(private router: Router, private service: MarcacaoService) { }

  ngOnInit(): void {
    this.service.list().subscribe(marcacoes => {
        this.marcacoes = marcacoes;
        console.log(marcacoes);
    });

  }

  delete(id: any)
    {
        this.service.delete(id).subscribe((id) => {});
        this.router.navigate([""]);
    }

}
