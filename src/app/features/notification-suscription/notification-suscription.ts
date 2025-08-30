import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFund } from '../../models/fund.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-notification-suscription',
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title class="text-lg font-bold mb-4">Suscribirse a {{ fund?.name }}</h2>

    <mat-dialog-content>
      <label class="block mb-2 font-semibold">Método de notificación:</label>
      <select [(ngModel)]="selectedMethod" class="border rounded px-2 py-1 w-full mb-4">
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="close()">Cancelar</button>
      <button mat-raised-button (click)="confirm()" class="btn-success">Suscribirse</button>
    </mat-dialog-actions> 
  `,
})
export class NotificationSuscription {

  constructor(
    public dialogRef: MatDialogRef<NotificationSuscription>,
    @Inject(MAT_DIALOG_DATA) public fund: IFund | null,
  ) {
  }

  selectedMethod: 'email' | 'sms' = 'email';

  /**
   * Método encargado de confirmar el método de notificación y la suscripción a un fondo
   */
  public confirm() {
    this.dialogRef.close(this.selectedMethod);
  }

  /**
   * Método encargado de cancelar la confirmación
   */
  public close() {
    this.dialogRef.close(null);
  }

}
