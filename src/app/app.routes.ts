import { Routes } from '@angular/router';
import { Fund } from './features/fund/fund';
import { Subscriptions } from './features/subscriptions/subscriptions';
import { History } from './features/history/history';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    { path: 'home', component: Dashboard },
    { path: 'suscription', component: Subscriptions },
    { path: 'fund', component: Fund },
    { path: 'history', component: History },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
