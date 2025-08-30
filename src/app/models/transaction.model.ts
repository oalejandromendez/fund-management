/**
 * Interfaz con la información de una transacción
 */
export interface ITransaction {
  fundId: number;
  fundName: string;
  type: 'subscribe' | 'unsubscribe';
  amount: number;
  date: string;
}
