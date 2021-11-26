import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marcacao } from 'src/app/models/marcacao';
import { MarcacaoService } from 'src/app/services/marcacao.service';

@Component({
  selector: 'app-editar-marcacao',
  templateUrl: './editar-marcacao.component.html',
  styleUrls: ['./editar-marcacao.component.css']
})
export class EditarMarcacaoComponent implements OnInit {

  public marcacoes: Marcacao[] = [];

    constructor(private router: Router, private service: MarcacaoService) { }

    id!: number;
    funcionarioId!: Number
    dataMarcacao!: string;
    horaEntrada!: string;
    horaSaidaAlmoco!: string;
    horaVoltaAlmoco!: string;
    saida!: string;
    funcionario!: Funcionario;

    ngOnInit(): void {
      
    
    this.service.list().subscribe(marcacoes => {
      this.marcacoes = marcacoes;
      console.log(marcacoes);
  });

  
    }

    update(): void{

      let marcacao: Marcacao ={
          id: this.id,
          funcionario: this.funcionario,
          funcionarioId: this.funcionarioId,
          dataMarcacao: this.dataMarcacao,
          horaEntrada: this.horaEntrada,
          horaSaidaAlmoco: this.horaSaidaAlmoco,
          horaVoltaAlmoco: this.horaVoltaAlmoco,
          saida: this.saida,
      }
      this.service.update(marcacao).subscribe(marcacao =>{
          console.log(marcacao)
          this.router.navigate(["marcacao/listar"]);
      });


    }

}
