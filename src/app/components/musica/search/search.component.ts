import { Component, OnInit } from '@angular/core';
//Importamos el Servicio 
import { ApiService } from '../../../services/api.service';

//Importamos la clase Artista 
import { Artist } from '../../../models/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr : string;
  searchResult : boolean;

  /*Vamos a conectar  Servicio  de la API en donde esta el método searchMusic
 Nos traemos el servicio y la importamos en el constructor*/

  constructor(private apiService: ApiService) { }
  /*La devolución de llamada en el método de componente actualizado 
  recibe un objeto de datos escrito, 
  que es más fácil y más seguro de consumir: */

  artist: Artist = {
    name: '',
    image: '',
    listeners: 0,
    playcount: 0,
    summary: '',
    url: '' }

//Ahora creamos dos objetos

  ngOnInit() {
  }

  //Get informacion this.searchStr,'getinfo' esto nos permite traer los datos de los artistas
  searchMusic() {
    this.searchResult = true;
    this.apiService.searchMusic(this.searchStr,'getinfo').subscribe((res: any) => {
      console.log (res)
      this.artist.name = res.artist.name;
      //Para traernos la imagen pero en tamaño mediano
      this.artist.image = res.artist.image[2]['#text'];
      this.artist.listeners = res.artist.stats.listeners;
      this.artist.playcount = res.artist.stats.playcount;
      this.artist.summary = res.artist.bio.summary;
      this.artist.url = res.artist.url;
    });
  }
  reset() {
    this.searchStr = null;
    this.searchResult = false;
  }
}
