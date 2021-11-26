import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marcacao } from 'src/app/models/marcacao';
import { MarcacaoService } from 'src/app/services/marcacao.service';

@Component({
  selector: 'app-cadastrar-marcacao',
  templateUrl: './cadastrar-marcacao.component.html',
  styleUrls: ['./cadastrar-marcacao.component.css']
})
export class CadastrarMarcacaoComponent implements OnInit {

  

  constructor(private router: Router, private service: MarcacaoService) { }

  funcionarioId!: Number
  dataMarcacao!: string;
  horaEntrada!: string;
  horaSaidaAlmoco!: string;
  horaVoltaAlmoco!: string;
  saida!: string;
  funcionario!: Funcionario;


  ngOnInit(): void {}

  cadastrar(): void{

    let marcacao: Marcacao ={

        funcionarioId: this.funcionarioId,
        funcionario: this.funcionario,
        dataMarcacao: this.dataMarcacao,
        horaEntrada: this.horaEntrada,
        horaSaidaAlmoco: this.horaSaidaAlmoco,
        horaVoltaAlmoco: this.horaVoltaAlmoco,
        saida: this.saida,
    }
    this.service.create(marcacao).subscribe(marcacao =>{
        console.log(marcacao)
        this.router.navigate(["marcacao/listar"]);
    });


  }

}
