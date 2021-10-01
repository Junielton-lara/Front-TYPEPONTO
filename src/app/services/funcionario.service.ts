import { Funcionario } from 'src/app/models/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

    private baseUrl = "http://localhost:5000/api";

    list() : Observable <Funcionario[]>
    {
        return this.http.get<Funcionario[]>(`${this.baseUrl}/funcionario/list`);
    }

    create(funcionario: Funcionario) : Observable<Funcionario>
    {
        return this.http.post<Funcionario>(`${this.baseUrl}/funcionario/create`, funcionario);
    }

    delete(pis: string) : Observable<Funcionario>
    {
        return this.http.delete<Funcionario>(`${this.baseUrl}/funcionario/delete/${pis}`);
    }

    update(funcionario: Funcionario) : Observable<Funcionario>
    {
        return this.http.put<Funcionario>(`${this.baseUrl}/funcionario/update`, funcionario)
    }

}
