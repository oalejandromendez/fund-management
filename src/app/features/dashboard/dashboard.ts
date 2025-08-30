import { Component, inject, OnInit } from '@angular/core';
import { UserStore } from '../../store/user.store';
import { MoneyPipe } from '../../pipes/money-pipe';

@Component({
  selector: 'app-dashboard',
  imports: [MoneyPipe],
  template: `
    @if (user()) {
      <h1 class="text-2xl font-semibold text-gray-800">
        Bienvenido <span class="text-[#03a9f4]">{{ user()?.name }}</span>
      </h1>
      <p>Saldo: {{ user()?.balance | money }}</p>
    } @else {
      <ng-template #noUser>
        <p>No hay usuario cargado.</p>
      </ng-template>
    }
  `
})
export class Dashboard implements OnInit {

  private _userStore = inject(UserStore);
  user = this._userStore.user;

  ngOnInit() {
    this.loadUser();
  }

  /**
   * Metodo encargado de consultar el usuario por id
   */
  private loadUser() {
    this._userStore.loadUserById('1');
  }

}
