
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Research } from './research-data'; // Assurez-vous que le chemin d'importation est correct

@Injectable({
  providedIn: 'root'
})
export class ResarchApiService {
  private apiUrl = 'http://localhost:8000/research'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  readResearch(clientId: string | null): Observable<Research[]> {
    return this.http.get<Research[]>(`${this.apiUrl}/${clientId}`);
  }
}
