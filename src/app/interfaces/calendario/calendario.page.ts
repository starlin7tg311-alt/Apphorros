/**
 * PANTALLA 1: Calendario de ahorros
 * Componentes Ionic: ion-card, ion-list, ion-fab (+ ion-menu mediante el boton del menu)
 */
import { Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput,
  IonItem, IonLabel, IonList, IonMenuButton, IonTitle, IonToolbar, ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, arrowBack, arrowForward } from 'ionicons/icons';
import { AhorrosService } from '../../servicios/ahorros.service';

@Component({
  selector: 'app-calendario',
  templateUrl: 'calendario.page.html',
  styleUrl: 'calendario.page.scss',
  imports: [
    DecimalPipe, FormsModule, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle,
    IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonButton, IonIcon, IonInput, IonList, IonItem, IonLabel, IonFab, IonFabButton,
  ],
})
export class CalendarioPage {
  readonly diasSemana = ['L', 'M', 'MI', 'J', 'V', 'S', 'D'];
  dia = signal(new Date().getDate()); // dia seleccionado
  monto: number | null = null; // monto escrito en el input

  // Dias del mes (null = espacios vacios antes del dia 1; la semana empieza en lunes)
  dias = computed(() => {
    const anio = this.ahorros.anio();
    const mes = this.ahorros.mes();
    const vacios = (new Date(anio, mes, 1).getDay() + 6) % 7;
    const total = new Date(anio, mes + 1, 0).getDate();
    return [...Array(vacios).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)] as (number | null)[];
  });

  // Fecha seleccionada en formato AAAA-MM-DD
  fecha = computed(() => {
    const mm = String(this.ahorros.mes() + 1).padStart(2, '0');
    return `${this.ahorros.anio()}-${mm}-${String(this.dia()).padStart(2, '0')}`;
  });

  // Ahorros del dia seleccionado
  ahorrosDelDia = computed(() => this.ahorros.ahorrosDelMes().filter((a) => a.fecha === this.fecha()));

  constructor(public ahorros: AhorrosService, private toast: ToastController) {
    addIcons({ add, arrowBack, arrowForward });
  }

  cambiarMes(delta: number) {
    this.ahorros.cambiarMes(delta);
    this.dia.set(1);
  }

  /** Guarda el monto en el dia seleccionado (boton FAB) */
  async guardar() {
    const valido = this.monto !== null && this.monto > 0;
    if (valido) {
      this.ahorros.agregar(this.fecha(), this.monto as number);
      this.monto = null;
    }
    const t = await this.toast.create({
      message: valido ? 'Ahorro guardado' : 'Escribe un monto valido',
      duration: 1500,
      color: valido ? 'success' : 'warning',
    });
    t.present();
  }
}
