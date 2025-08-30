import { Component, computed } from '@angular/core';
import { UserStore } from '../../store/user.store';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MoneyPipe } from '../../pipes/money-pipe';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MoneyPipe, DatePipe, CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.scss'
})
export class History {

  displayedColumns: string[] = ['date', 'name', 'type', 'amount'];

  get user() { return this._userStore.user; }
  transactions = computed(() => this.user()?.transactions ?? []);

  constructor(
    private readonly _userStore: UserStore,
  ) {
    if (!this.user()) {
      this.loadUser();
    }
  }

  /**
   * Metodo encargado de consultar el usuario por id
   */
  private loadUser() {
    this._userStore.loadUserById('1');
  }

}
