import { EditarMarcacaoComponent } from './components/views/marcacao/editar-marcacao/editar-marcacao.component';
import { EditarFuncionarioComponent } from './components/views/funcionario/editar-funcionario/editar-funcionario.component';
import { CadastrarMarcacaoComponent } from './components/views/marcacao/cadastrar-marcacao/cadastrar-marcacao.component';
import { ListarMarcacaoComponent } from './components/views/marcacao/listar-marcacao/listar-marcacao.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';

const routes: Routes = [

    {
        path: '',
        component: ListarFuncionarioComponent
    },
    {
        path: 'funcionario/listar',
        component: ListarFuncionarioComponent
    },
    {
        path: 'funcionario/cadastrar',
        component: CadastrarFuncionarioComponent
    },
    {
        path: 'funcionario/editar',
        component: EditarFuncionarioComponent
    },
    {
        path: 'marcacao/listar',
        component: ListarMarcacaoComponent
    },
    {
        path: 'marcacao/cadastrar',
        component: CadastrarMarcacaoComponent
    },
    {
        path: 'marcacao/editar',
        component: EditarMarcacaoComponent
    }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
