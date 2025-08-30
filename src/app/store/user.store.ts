import { Injectable, signal } from '@angular/core';
import { ISubscription, IUser } from '../models/user.model';
import { IFund } from '../models/fund.model';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ITransaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class UserStore {

  private _user = signal<IUser | null>(null);

  user = this._user.asReadonly();

  constructor(
    private _userService: UserService,
    private _toastrService: ToastrService
  ) { }

  /**
   * Método para consultar un usuario por id y actualizarlo en el signal
   * @param id Identificador del usuario a consultar
   */
  loadUserById(id: string) {
    this._userService.getUserById(id).subscribe({
      next: (user) => this._user.set(user),
      error: () => {
        this._toastrService.error('Error cargando el usuario');
      }
    });
  }

  /**
   * Método encargado de suscribir un fondo a un usuario
   * @param fund Fondo a suscribir
   * @param notificationMethod Método de notificación
   */
  subscribeToFund(fund: IFund, notificationMethod: 'email' | 'sms') {
    const currentUser = this._user();
    if (!currentUser) {
      this._toastrService.error('No hay usuario cargado');
      return;
    }

    if (fund.minAmount > currentUser.balance) {
      this._toastrService.error('Saldo insuficiente');
      return;
    }

    const subscription: ISubscription = {
      ...fund,
      date: new Date().toISOString(),
      notificationMethod
    };

    const transaction: ITransaction = {
      fundId: fund.id,
      fundName: fund.name,
      type: 'subscribe',
      amount: fund.minAmount,
      date: new Date().toISOString()
    };

    const updatedUser: IUser = {
      ...currentUser,
      balance: currentUser.balance - fund.minAmount,
      subscriptions: [...currentUser.subscriptions, subscription],
      transactions: [...(currentUser.transactions ?? []), transaction]
    };

    this._userService.updateUserSubscriptions(currentUser.id, updatedUser.balance, updatedUser.subscriptions, updatedUser.transactions)
      .subscribe({
        next: () => {
          this._user.set(updatedUser);
          this._toastrService.success('Suscripción realizada con exito');
        },
        error: () => {
          this._toastrService.error('Error realizando la suscripción');
          this._user.set(currentUser);
        }
      });
  }

  /**
   * Método para cancelar una suscripción de un usuario
   * @param fundId Id de la suscripción a cancelar
   */
  unsubscribeFromFund(fundId: number) {
    const currentUser = this._user();
    if (!currentUser) {
      this._toastrService.error('No hay usuario cargado');
      return;
    }

    const subscription = currentUser.subscriptions.find(s => s.id === fundId);
    if (!subscription) {
      this._toastrService.error('No estás suscrito a este fondo');
      return;
    }

    const transaction: ITransaction = {
      fundId: subscription.id,
      fundName: subscription.name,
      type: 'unsubscribe',
      amount: subscription.minAmount,
      date: new Date().toISOString()
    };

    const updatedUser: IUser = {
      ...currentUser,
      balance: currentUser.balance + subscription.minAmount,
      subscriptions: currentUser.subscriptions.filter(s => s.id !== fundId),
      transactions: [...(currentUser.transactions ?? []), transaction]
    };

    this._userService.updateUserSubscriptions(currentUser.id, updatedUser.balance, updatedUser.subscriptions, updatedUser.transactions)
      .subscribe({
        next: () => {
          this._user.set(updatedUser);
          this._toastrService.success('Suscripción cancelada con éxito');
        },
        error: () => {
          this._user.set(currentUser);
          this._toastrService.error('Error cancelando la suscripción');
        }
      });
  }

}