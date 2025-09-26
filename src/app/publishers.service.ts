import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Publishers{
  id: number;
  name: string;
  logo: string;
}

@Injectable({
  providedIn: 'root',
})
export class PublishersService {
private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPortfolio(): Observable<Publishers[]> {
    return this.http.get<Publishers[]>(`${this.apiUrl}/portfolio`);
  }

  getNonConnected(): Observable<Publishers[]> {
    return this.http.get<Publishers[]>(`${this.apiUrl}/nonConnected`);
  }
  getSupported(): Observable<Publishers[]> {
    return this.http.get<Publishers[]>(`${this.apiUrl}/supported`);
  }

}
