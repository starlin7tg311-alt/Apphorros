/**
 * PANTALLA 3: Metas de ahorro
 * Componentes Ionic: ion-card, ion-list, ion-fab
 * Gesto: pinch/zoom sobre la imagen del grafico.
 */
import { Component, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {
  AlertController, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel,
  IonList, IonMenuButton, IonProgressBar, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { AhorrosService } from '../../servicios/ahorros.service';
import { PinchZoomDirective } from '../../gestos/pinch-zoom.directive';

@Component({
  selector: 'app-metas',
  templateUrl: 'metas.page.html',
  styleUrl: 'metas.page.scss',
  imports: [
    DecimalPipe, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList,
    IonItem, IonLabel, IonProgressBar, IonFab, IonFabButton, IonIcon, PinchZoomDirective,
  ],
})
export class MetasPage {
  metas = signal([
    { nombre: 'Fondo de emergencia', objetivo: 10000 },
    { nombre: 'Vacaciones', objetivo: 25000 },
  ]);

  constructor(public ahorros: AhorrosService, private alerta: AlertController) {
    addIcons({ add });
  }

  /** Progreso de 0 a 1 segun lo ahorrado en total */
  progreso(objetivo: number) {
    return Math.min(this.ahorros.totalGeneral() / objetivo, 1);
  }

  /** Boton FAB: agrega una meta nueva */
  async nuevaMeta() {
    const a = await this.alerta.create({
      header: 'Nueva meta',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre' },
        { name: 'objetivo', type: 'number', placeholder: 'Monto objetivo $RD' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (d) => {
            if (d.nombre && Number(d.objetivo) > 0) {
              this.metas.update((m) => [...m, { nombre: d.nombre, objetivo: Number(d.objetivo) }]);
            }
          },
        },
      ],
    });
    a.present();
  }
}
