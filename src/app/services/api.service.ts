/*Después de haber importado HttpClientModuleen AppModule, 
puede inyectar HttpClient en una clase de aplicación  */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY_LASTFM = '250efafc211d1b7d587ac8597b8d210f';

  constructor(private http: HttpClient) { }

  //Cremos un funcion para llamar los datos del archivo Json para obtener la lista de musica segun un busqueda
  searchMusic(artistName: string, queryType: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${artistName}&api_key=${this.API_KEY_LASTFM}&format=json`);
  }
}
