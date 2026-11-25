import { Injectable, computed, signal } from '@angular/core';

export interface Ahorro {
  id: number;
  fecha: string; // formato AAAA-MM-DD
  monto: number;
}

const CLAVE = 'apphorros_ahorros';

@Injectable({ providedIn: 'root' })
export class AhorrosService {
  readonly nombresMes = [
    'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
    'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE',
  ];

  // Estado
  private _ahorros = signal<Ahorro[]>(this.leer());
  mes = signal(new Date().getMonth());
  anio = signal(new Date().getFullYear());

  // Datos calculados
  ahorrosDelMes = computed(() => {
    const prefijo = `${this.anio()}-${String(this.mes() + 1).padStart(2, '0')}`;
    return this._ahorros().filter((a) => a.fecha.startsWith(prefijo));
  });
  totalDelMes = computed(() => this.ahorrosDelMes().reduce((s, a) => s + a.monto, 0));
  totalGeneral = computed(() => this._ahorros().reduce((s, a) => s + a.monto, 0));

  /** Avanza (+1) o retrocede (-1) un mes */
  cambiarMes(delta: number) {
    const fecha = new Date(this.anio(), this.mes() + delta, 1);
    this.mes.set(fecha.getMonth());
    this.anio.set(fecha.getFullYear());
  }

  agregar(fecha: string, monto: number) {
    this._ahorros.update((lista) => [...lista, { id: Date.now(), fecha, monto }]);
    this.guardar();
  }

  eliminar(id: number) {
    this._ahorros.update((lista) => lista.filter((a) => a.id !== id));
    this.guardar();
  }

  /** Vuelve a leer los datos guardados (lo usa el pull-to-refresh) */
  recargar() {
    this._ahorros.set(this.leer());
  }

  // Persistencia simple en localStorage
  private guardar() {
    localStorage.setItem(CLAVE, JSON.stringify(this._ahorros()));
  }
  private leer(): Ahorro[] {
    try {
      return JSON.parse(localStorage.getItem(CLAVE) ?? '[]');
    } catch {
      return [];
    }
  }
}
