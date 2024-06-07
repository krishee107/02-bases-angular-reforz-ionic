import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    // .pipe(tap(posts => console.log(posts))); -> Tap es un operador que permite realizar acciones secundarias en el flujo de datos. En este caso, se utiliza para imprimir en consola los posts que se obtienen de la API.
  }
}
