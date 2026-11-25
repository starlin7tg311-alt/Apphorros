/**
 * GESTO 1: SWIPE PARA ELIMINAR (ion-item-sliding)
 * Proposito: eliminar un ahorro registrado deslizando la fila, sin menus extra.
 * Tambien emite "presionLarga" para el GESTO 4 (long-press).
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { LongPressDirective } from './long-press.directive';

@Component({
  selector: 'app-swipe-eliminar',
  templateUrl: 'swipe-eliminar.component.html',
  imports: [IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonIcon, LongPressDirective],
})
export class SwipeEliminarComponent {
  @Input() titulo = '';
  @Input() subtitulo = '';
  @Output() eliminar = new EventEmitter<void>();
  @Output() presionLarga = new EventEmitter<void>();

  constructor() {
    addIcons({ trash });
  }
}
