import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISubscription, IUser } from '../models/user.model';
import { Observable, tap } from 'rxjs';
import { ITransaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Método encargado de consultar un usuario por id
   * @param id Identificador del usuario
   * @returns Información del usuario
   */
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  /**
   * Método encargado de actualizar el saldo, las suscripciones y las transacciones de un usuario
   * @param userId Identificador del usuario
   * @param balance Saldo del usuario
   * @param subscriptions Lista de suscripciones del usuario
   * @param transactions Lista de transacciones del usuario
   * @returns Información del usuario actualizada
   */
  updateUserSubscriptions(userId: number, balance: number, subscriptions: ISubscription[], transactions: ITransaction[]): Observable<IUser> {
    return this.http.patch<IUser>(`${this.apiUrl}/${userId}`, {
      balance,
      subscriptions,
      transactions
    });
  }


}
