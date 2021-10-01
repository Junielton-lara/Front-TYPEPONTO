import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarMarcacaoComponent } from './components/views/marcacao/listar-marcacao/listar-marcacao.component';
import { CadastrarMarcacaoComponent } from './components/views/marcacao/cadastrar-marcacao/cadastrar-marcacao.component';
import { EditarFuncionarioComponent } from './components/views/funcionario/editar-funcionario/editar-funcionario.component';
import { EditarMarcacaoComponent } from './components/views/marcacao/editar-marcacao/editar-marcacao.component';




@NgModule({
  declarations: [
    AppComponent,
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    ListarMarcacaoComponent,
    CadastrarMarcacaoComponent,
    EditarFuncionarioComponent,
    EditarMarcacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
