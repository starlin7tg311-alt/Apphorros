/**
 * GESTO 4: LONG-PRESS (presion prolongada)
 * Proposito: abrir un menu contextual (eliminar) al mantener presionado un ahorro.
 * Uso: <ion-item appLongPress (longPress)="accion()">
 * Se cancela si el dedo se mueve (para no chocar con el swipe) o se suelta antes de tiempo.
 */
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: '[appLongPress]', standalone: true })
export class LongPressDirective {
  @Input() duracion = 600; // milisegundos para considerarlo "largo"
  @Output() longPress = new EventEmitter<void>();

  private temporizador?: ReturnType<typeof setTimeout>;
  private x = 0;
  private y = 0;

  @HostListener('pointerdown', ['$event'])
  inicio(e: PointerEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
    this.cancelar();
    this.temporizador = setTimeout(() => this.longPress.emit(), this.duracion);
  }

  // Si el dedo se mueve mas de 10px es un swipe, no un long-press
  @HostListener('pointermove', ['$event'])
  mover(e: PointerEvent) {
    if (Math.hypot(e.clientX - this.x, e.clientY - this.y) > 10) this.cancelar();
  }

  @HostListener('pointerup')
  @HostListener('pointercancel')
  @HostListener('pointerleave')
  cancelar() {
    clearTimeout(this.temporizador);
  }

  // Evita el menu nativo del navegador al mantener presionado
  @HostListener('contextmenu', ['$event'])
  bloquear(e: Event) {
    e.preventDefault();
  }
}
