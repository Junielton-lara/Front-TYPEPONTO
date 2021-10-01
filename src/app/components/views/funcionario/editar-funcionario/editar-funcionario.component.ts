import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {
    id!: number;
    nome!: string;
    pis!: string;
    valorHora!: number;
  constructor(private router: Router, private serivce: FuncionarioService) { }

  ngOnInit(): void {
  }

  update(): void
  {
    let funcionario: Funcionario ={
        id: this.id,
        nome: this.nome,
        pis: this.pis,
        valorHora: this.valorHora,
    }
    this.serivce.update(funcionario).subscribe(funcionario => {
        console.log(funcionario);
        this.router.navigate(["funcionario/listar"]);
    })


  }

}
