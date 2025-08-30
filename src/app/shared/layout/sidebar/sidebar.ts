import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatToolbarModule, MatListModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  menuItems = [
    { label: 'Dashboard', route: 'home', icon: 'home' },
    { label: 'Fondos', route: 'fund', icon: 'fund' },
    { label: 'Mis suscripciones', route: 'suscription', icon: 'suscription' },
    { label: 'Historial', route: 'history', icon: 'history' }
  ];

}
