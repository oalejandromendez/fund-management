import { Component } from '@angular/core';
import { FundStore } from '../../store/fund.store';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MoneyPipe } from '../../pipes/money-pipe';
import { UserStore } from '../../store/user.store';
import { IFund } from '../../models/fund.model';
import { MatDialog } from '@angular/material/dialog';
import { NotificationSuscription } from '../notification-suscription/notification-suscription';

@Component({
  selector: 'app-fund',
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MoneyPipe, MatTooltipModule],
  templateUrl: './fund.html',
  styleUrl: './fund.scss'
})
export class Fund {

  displayedColumns: string[] = ['name', 'minAmount', 'category', 'actions'];

  get funds() { return this._fundStore.funds; }
  get user() { return this._userStore.user; }

  constructor(
    private readonly _fundStore: FundStore,
    private readonly _userStore: UserStore,
    private _matDialog: MatDialog
  ) { }


  ngOnInit(): void {
    if (!this.user()) {
      this.loadUser();
    }
    this.loadFunds();
  }

  /**
   * Metodo encargado de consultar la lista de fondos
   */
  private loadFunds() {
    this._fundStore.get();
  }

  /**
   * Metodo encargado de consultar el usuario por id
   */
  private loadUser() {
    this._userStore.loadUserById('1');
  }

  /**
   * Metodo encargado de validar si un fondo ya pertenece a la lista de suscripciones de un usuario
   * @param fund Fondo a consultar
   * @returns true si el fondo existe en la lista de suscripciones, false en caso contrario
   */
  public validateSubscription(fund: IFund): boolean {
    return this.user()?.subscriptions.some(s => s.id === fund.id) ?? false;
  }

  /**
   * Metodo encargado de realizar la suscripción de un fondo
   * @param fund Fondo a suscribirse
   */
  public onSubscribe(fund: IFund) {
    try {

      const dialogRef = this._matDialog.open(NotificationSuscription, {
        width: '450px',
        data: fund
      });

      dialogRef.afterClosed().subscribe((selectedMethod: 'email' | 'sms' | null) => {
        if (selectedMethod) {
          this._userStore.subscribeToFund(fund, selectedMethod);
        }
      });

    } catch (e: any) {
      alert(e.message);
    }
  }

}
