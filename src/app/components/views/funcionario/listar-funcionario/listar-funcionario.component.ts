import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

    fonteDados: Funcionario[] = [];
    exibirColunas: String[] = ["id", "nome","pis","valorHora","dataAdm"]


    constructor(private router: Router, private service: FuncionarioService){}

    public funcionarios: Funcionario[] = [];

    ngOnInit(): void
    {
        this.service.list().subscribe(funcionarios => {
            this.fonteDados = funcionarios;
            console.log(funcionarios);


        });

    }


}
