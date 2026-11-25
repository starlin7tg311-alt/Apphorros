import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonMenu, IonMenuToggle, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barChart, calendar, listCircle, flag } from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  imports: [
    RouterLink, RouterLinkActive, IonMenu, IonMenuToggle, IonHeader, IonToolbar,
    IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel,
  ],
})
export class MenuComponent {
  // Opciones de navegacion del menu
  opciones = [
    { titulo: 'Calendario', ruta: '/calendario', icono: 'calendar' },
    { titulo: 'Detalles', ruta: '/detalles', icono: 'list-circle' },
    { titulo: 'Metas', ruta: '/metas', icono: 'flag' },
  ];

  constructor() {
    addIcons({ barChart, calendar, listCircle, flag });
  }
}
