import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginServicio } from '../../../Servicios/LoginServicio';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
 CentrarVertical = true;
  opciones: any[] = [];

  constructor(private loginServicio: LoginServicio) {}

  ngOnInit(): void {
    const usuario = this.loginServicio.ObtenerUsuario();
    const esJmiza = usuario?.NombreUsuario === 'JMiza';

    this.opciones = [
      { nombre: 'Clientes', icono: 'bi-people-fill', ruta: '/cliente' },
      { nombre: 'Pedidos', icono: 'bi-bag-fill', ruta: '/pedido-listado' },
      { nombre: 'Historial de Pedidos', icono: 'bi-clock-history', ruta: '/pedido-historial-listado' },
      { nombre: 'Inventario', icono: 'bi-box-seam', ruta: '/inventario-listado' },
      { nombre: 'Ventas', icono: 'bi-cash-stack', ruta: '/venta-listado' },
      // { nombre: 'Anexos', icono: 'bi-paperclip', ruta: '/menu-oficial' },
      ...(esJmiza ? [{ nombre: 'Reportes', icono: 'bi-bar-chart-fill', ruta: '/reporte-venta' }] : [])
      // { nombre: 'Configuración', icono: 'bi-gear-fill', ruta: '/configuracion-listado' }
    ];
  }
}
