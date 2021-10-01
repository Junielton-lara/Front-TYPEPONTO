import { FuncionarioService } from './../../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  constructor(private router: Router, private serivce: FuncionarioService) { }

    nome!: string;
    pis!: string;
    valorHora!: number;

  ngOnInit(): void {}

    cadastrar(): void{

        let funcionario: Funcionario ={
            nome: this.nome,
            pis: this.pis,
            valorHora: this.valorHora,
        }
        this.serivce.create(funcionario).subscribe(funcionario =>{
            console.log(funcionario);
            this.router.navigate(["funcionario/listar"]);
        })
    }

}
