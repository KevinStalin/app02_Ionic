import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../services/recursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {

  recursos:Observable<any>;
  constructor(private recusrosServicio:RecursosService) { }

  ngOnInit() {
    this.recursos=this.recusrosServicio.getRecursos();
  }

}
