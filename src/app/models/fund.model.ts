/**
 * Interfaz con la información de un fondo
 */
export interface IFund {
    id: number;
    name: string;
    minAmount: number;
    category: 'FPV' | 'FIC';
}