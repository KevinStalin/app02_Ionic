import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes:Observable<any>;
  constructor(private datosServicio:DataService) { }

  ngOnInit() {
    this.clientes=this.datosServicio.getClients();
  }

}
