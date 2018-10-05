import { Component, OnInit } from '@angular/core';

 //Importamos el Servicio 
 import { ApiService } from '../../../services/api.service';

//Importamos la clase Artista 
import { Artist } from '../../../models/artist'; 
//Importamos la clase Ranking
import { Ranking } from '../../../models/ranking'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchResult: boolean; 

  /*Vamos a conectar  Servicio  de la API en donde esta el método searchMusic
 Nos traemos el servicio y la importamos en el constructor*/

  constructor( private apiService: ApiService ) { }
  /*La devolución de llamada en el método de componente actualizado 
  recibe un objeto de datos escrito, 
  que es más fácil y más seguro de consumir: */

  artist: Artist = {
    name: '',
    image: '',
    listeners: 0,
    playcount: 0,
    summary: '',
    url: ''
  } 

  /*Creamos un array de Objectos, dado que segun la estructura de los track 
   este muestra un array de objectos por ese motivo estructuramos*/


  ranking: Ranking[] = [
    { name: '', listeners: 0, rank: 1 },
    { name: '', listeners: 0, rank: 2 },
    { name: '', listeners: 0, rank: 3 },
    { name: '', listeners: 0, rank: 4 },
    { name: '', listeners: 0, rank: 5 },
    { name: '', listeners: 0, rank: 6 },
    { name: '', listeners: 0, rank: 7 },
    { name: '', listeners: 0, rank: 8 },
    { name: '', listeners: 0, rank: 9 },
    { name: '', listeners: 0, rank: 10 } ]

  ngOnInit() {
  }

  //Get informacion this.searchStr,'getinfo' esto nos permite traer los datos de los artistas
  searchMusic() {
    this.searchResult = true;
    this.apiService.searchMusic(this.searchStr, 'getinfo').subscribe((res: any) => {
      console.log(res)
      this.artist.name = res.artist.name;
      this.artist.image = res.artist.image[2]['#text'];
      this.artist.listeners = res.artist.stats.listeners;
      this.artist.playcount = res.artist.stats.playcount;
      this.artist.summary = res.artist.bio.summary;
      this.artist.url = res.artist.url;
    });

    this.apiService.searchMusic(this.searchStr, 'gettoptracks').subscribe((res: any) => {
      console.log(res)
      for (let i = 0; i < this.ranking.length; i++) {
        this.ranking[i].name = res.toptracks.track[i].name;
        this.ranking[i].listeners = res.toptracks.track[i].listeners;       
      }   

    });
  }
  reset() {
    this.searchStr = null;
    this.searchResult = false;
  } 
}
