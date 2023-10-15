import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, ClientIn } from './customer-data'; // Remplacez par le chemin correct vers le modèle Client

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8000/clients'; // Remplacez par l'URL réelle de votre API

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClientById(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${clientId}`);
  }

  createClient(client: ClientIn): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  updateClient(clientId: string, client: ClientIn): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${clientId}`, client);
  }

  deleteClient(clientId: string): Observable<Client> {
    return this.http.delete<Client>(`${this.apiUrl}/${clientId}`);
  }
}
