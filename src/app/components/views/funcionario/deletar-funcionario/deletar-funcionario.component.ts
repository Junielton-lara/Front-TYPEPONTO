import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-deletar-funcionario',
  templateUrl: './deletar-funcionario.component.html',
  styleUrls: ['./deletar-funcionario.component.css']
})
export class DeletarFuncionarioComponent implements OnInit {

  public funcionarios: Funcionario[] = [];

    id!: number;
    nome!: string;
    pis!: string;
    valorHora!: number;

  constructor(private router: Router, private service: FuncionarioService) { }

  ngOnInit(): void {
    this.service.list().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
      console.log(funcionarios);
  });

  }


  delete(pis: string)
  {
    let funcionario: Funcionario ={
      id: this.id,
      nome: this.nome,
      pis: this.pis,
      valorHora: this.valorHora,
  }
      this.service.delete(pis).subscribe((pis) => {});
      this.router.navigate([""]);
  }

}
