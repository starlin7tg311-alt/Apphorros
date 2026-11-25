/**
 * GESTO 3: PINCH / ZOOM sobre una imagen
 * Proposito: ampliar el grafico de progreso para ver mejor los detalles.
 * Uso: <img appPinchZoom ...>
 * - Celular: pellizcar con dos dedos.
 * - Computadora (pruebas): Ctrl + rueda del mouse. Doble clic para restablecer.
 */
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({ selector: '[appPinchZoom]', standalone: true })
export class PinchZoomDirective implements OnInit {
  private distanciaInicial = 0;
  private escalaBase = 1; // escala acumulada antes de empezar el pellizco
  private escala = 1;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    // Evita que el navegador haga su propio zoom
    this.el.nativeElement.style.touchAction = 'pan-x pan-y';
  }

  /** Aplica la escala a la imagen (entre 1x y 4x) */
  private aplicar(escala: number) {
    this.escala = Math.min(Math.max(escala, 1), 4);
    this.el.nativeElement.style.transform = `scale(${this.escala})`;
  }

  /** Distancia entre los dos dedos */
  private distancia(e: TouchEvent): number {
    const [a, b] = [e.touches[0], e.touches[1]];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  // ---- Dos dedos (celular) ----
  @HostListener('touchstart', ['$event'])
  inicio(e: TouchEvent) {
    if (e.touches.length === 2) {
      this.distanciaInicial = this.distancia(e);
      this.escalaBase = this.escala;
      this.el.nativeElement.style.transition = 'none';
    }
  }

  @HostListener('touchmove', ['$event'])
  mover(e: TouchEvent) {
    if (e.touches.length === 2 && this.distanciaInicial > 0) {
      e.preventDefault();
      this.aplicar(this.escalaBase * (this.distancia(e) / this.distanciaInicial));
    }
  }

  @HostListener('touchend')
  fin() {
    this.distanciaInicial = 0;
  }

  // ---- Ctrl + rueda (computadora / trackpad) ----
  @HostListener('wheel', ['$event'])
  rueda(e: WheelEvent) {
    if (!e.ctrlKey) return; // sin Ctrl, la pagina se desplaza normal
    e.preventDefault();
    this.aplicar(this.escala * (e.deltaY < 0 ? 1.1 : 0.9));
  }

  // ---- Doble clic / doble toque: volver al tamano original ----
  @HostListener('dblclick')
  restablecer() {
    this.el.nativeElement.style.transition = 'transform 0.25s';
    this.aplicar(1);
  }
}