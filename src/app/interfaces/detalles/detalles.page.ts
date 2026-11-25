/**
 * PANTALLA 2: Detalles de ahorros
 * Componentes Ionic: ion-card, ion-list, ion-item-sliding, ion-refresher
 * Gestos: swipe para eliminar, pull-to-refresh y long-press.
 */
import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {
  ActionSheetController, IonButtons, IonCard, IonCardContent, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList,
  IonMenuButton, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, ToastController,
} from '@ionic/angular/standalone';
import { RefresherCustomEvent } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { close, trash } from 'ionicons/icons';
import { Ahorro, AhorrosService } from '../../servicios/ahorros.service';
import { SwipeEliminarComponent } from '../../gestos/swipe-eliminar.component';
import { simularRecarga } from '../../gestos/pull-refresh';

@Component({
  selector: 'app-detalles',
  templateUrl: 'detalles.page.html',
  imports: [
    DecimalPipe, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,
    IonRefresher, IonRefresherContent, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, SwipeEliminarComponent,
  ],
})
export class DetallesPage {
  constructor(
    public ahorros: AhorrosService,
    private actionSheet: ActionSheetController,
    private toast: ToastController,
  ) {
    addIcons({ close, trash });
  }

  /** GESTO 2: pull-to-refresh */
  refrescar(evento: RefresherCustomEvent) {
    simularRecarga(evento, async () => {
      this.ahorros.recargar();
      const t = await this.toast.create({ message: 'Ahorros actualizados', duration: 1200 });
      t.present();
    });
  }

  /** GESTO 1: swipe para eliminar */
  eliminar(a: Ahorro) {
    this.ahorros.eliminar(a.id);
  }

  /** GESTO 4: long-press -> menu contextual */
  async menuContextual(a: Ahorro) {
    const hoja = await this.actionSheet.create({
      header: `$RD ${a.monto.toFixed(2)}`,
      subHeader: a.fecha,
      buttons: [
        { text: 'Eliminar', role: 'destructive', icon: 'trash', handler: () => this.ahorros.eliminar(a.id) },
        { text: 'Cancelar', role: 'cancel', icon: 'close' },
      ],
    });
    hoja.present();
  }
}
