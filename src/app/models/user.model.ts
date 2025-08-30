import { IFund } from "./fund.model";
import { ITransaction } from "./transaction.model";

/**
 * Interfaz con la información de un usuario
 */
export interface IUser {
    id: number;
    name: string;
    balance: number;
    email: string;
    phone: string;
    subscriptions: ISubscription[],
    transactions: ITransaction[];
}

/**
 * Interfaz con la información de una suscripción
 */
export interface ISubscription extends IFund {
    date: string;
    notificationMethod: 'email' | 'sms';
}