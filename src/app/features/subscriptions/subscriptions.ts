import { Component, computed } from '@angular/core';
import { UserStore } from '../../store/user.store';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MoneyPipe } from '../../pipes/money-pipe';
import { DatePipe } from '@angular/common';
import { ISubscription } from '../../models/user.model';

@Component({
  selector: 'app-subscriptions',
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MoneyPipe, MatTooltipModule, DatePipe],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.scss'
})
export class Subscriptions {

  displayedColumns: string[] = ['name', 'amount', 'category', 'notification', 'date', 'actions'];

  get user() { return this._userStore.user; }

  subscriptions = computed(() => this.user()?.subscriptions ?? []);

  constructor(
    private readonly _userStore: UserStore,
  ) {
    if (!this.user()) {
      this.loadUser();
    }
  }

  /**
   * Método encargado de consultar el usuario por id
   */
  public loadUser() {
    this._userStore.loadUserById('1');
  }


  /**
   * Método encargado de realizar la cancelación de una suscripción
   * @param suscription Suscripción a cancelar
   */
  public onCancel(suscription: ISubscription) {
    try {
      this._userStore.unsubscribeFromFund(suscription.id);
    } catch (e: any) {
      alert(e.message);
    }
  }

}
