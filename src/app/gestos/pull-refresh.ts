/**
 * GESTO 2: PULL-TO-REFRESH (ion-refresher)
 * Proposito: actualizar la lista de ahorros deslizando hacia abajo.
 * Se usa en el (ionRefresh) del <ion-refresher> de la pantalla.
 */
import { RefresherCustomEvent } from '@ionic/angular';

export function simularRecarga(evento: RefresherCustomEvent, accion: () => void, ms = 1500) {
  setTimeout(() => {
    accion(); // recarga los datos
    evento.target.complete(); // oculta el indicador de carga
  }, ms);
}
