import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  lista: listado[] = [
    {
      name: 'Alestas',
      redirecTo: '/alertas',
      icon: 'beer-outline'
    },
    {
      name: "Action-Sheet",
      redirecTo: "/action-sheet",
      icon: "boat-outline"
    },
    {
      name: 'Tarjetas',
      redirecTo: '/tarjetas',
      icon: 'bug-outline'
    },
    {
      name: 'Clientes',
      redirecTo: '/clientes',
      icon: 'people-outline'
    },
    {
      name: 'Recursos',
      redirecTo: '/recursos',
      icon: ''
    }    
  ]

  menu:Observable<any>;

  constructor(private datosServicio:DataService) { }

  ngOnInit() {
    this.menu=this.datosServicio.getMenu();
  }

}

interface listado {
  name: string;
  redirecTo: string;
  icon: string;

}