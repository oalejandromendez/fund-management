import { Injectable, signal, computed } from '@angular/core';
import { IFund } from '../models/fund.model';
import { FundService } from '../services/fund.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class FundStore {

    funds = signal<IFund[]>([]);

    constructor(
        private _fundService: FundService,
        private _toastrService: ToastrService
    ) { }

    /**
     * Método para consultar la lista de fondos y actualizarlos en el signal
     */
    get() {
        this._fundService.get().subscribe({
            next: (data) => {
                this.funds.set(data);
            },
            error: () => {
                this._toastrService.error('Error al cargar los fondos');
            }
        });
    }
}
