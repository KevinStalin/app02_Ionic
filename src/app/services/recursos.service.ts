import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http:HttpClient) { }

  public getRecursos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

}
