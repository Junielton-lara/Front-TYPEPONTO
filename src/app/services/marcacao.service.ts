import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcacao } from 'src/app/models/marcacao'

@Injectable({
  providedIn: 'root'
})
export class MarcacaoService {

  constructor(private http: HttpClient) { }

    private baseUrl = "http://localhost:5000/api";

    list() : Observable <Marcacao[]>
    {
        return this.http.get<Marcacao[]>(`${this.baseUrl}/marcacao/list`);
    }

    create(marcacao: Marcacao) : Observable<Marcacao>
    {
        return this.http.post<Marcacao>(`${this.baseUrl}/marcacao/create`, marcacao)
    }

    delete(id: any) : Observable<Marcacao>
    {
        return this.http.delete<Marcacao>(`${this.baseUrl}/marcacao/delete/${id}`);

    }

    update(marcacao: Marcacao) : Observable<Marcacao>
    {
        return this.http.put<Marcacao>(`${this.baseUrl}/marcacao/update`, marcacao)
    }
}
