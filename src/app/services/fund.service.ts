import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFund } from '../models/fund.model';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  private apiUrl = `${environment.apiUrl}/funds`;

  constructor(private http: HttpClient) {}

  /**
   * Método encargado de consultar la lista de fondos
   * @returns La lista de fondos
   */
  get(): Observable<IFund[]> {
    return this.http.get<IFund[]>(this.apiUrl);
  }
}
