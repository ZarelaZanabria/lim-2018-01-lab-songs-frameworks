/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api.ServiceService {

  constructor( private http: HttpClient ) { }

 API_KEY_LASTFM = '250efafc211d1b7d587ac8597b8d210f';
  
  searchMusic(artistName: string, queryType: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${artistName}&api_key=${this.API_KEY_LASTFM}&format=json`);
  } 

} */
