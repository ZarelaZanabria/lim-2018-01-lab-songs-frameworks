import { Component, OnInit } from '@angular/core';
 //Importamos el Servicio 
 import { ApiService } from '../../services/api.service';

//Importamos la clase Artista 
import { Artist } from '../../models/artist'; 
//Importamos la clase Ranking
import { Ranking } from '../../models/ranking'; 

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

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
   
  } 
  /*Creamos un array de Objectos, dado que segun la estructura de los track 
   este muestra un array de objectos por ese motivo estructuramos*/


  ranking: Ranking[] = [
    { name: '', listeners: 0, rank: 1 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 2 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 3 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 4 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 5 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 6 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 7 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 8 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 9 ,like : 0,  dislike : 0},
    { name: '', listeners: 0, rank: 10,like : 0,  dislike : 0 } ]

  ngOnInit() {
  }

  //Get informacion this.searchStr,'getinfo' esto nos permite traer los datos de los artistas
  searchMusic() {
    this.searchResult = true;
    this.apiService.searchMusic(this.searchStr, 'getinfo').subscribe((res: any) => {
      console.log(res)
      this.artist.name = res.artist.name;
      this.artist.image = res.artist.image[2]['#text'];
      
      
    });

    this.apiService.searchMusic(this.searchStr, 'gettoptracks').subscribe((res: any) => {
      console.log(res)
      for (let i = 0; i < this.ranking.length; i++) {
        this.ranking[i].name = res.toptracks.track[i].name;
        this.ranking[i].listeners = res.toptracks.track[i].listeners;    
        this.ranking[i].like =  res.toptracks.track[i].listeners;  
        //console.log (this.ranking[i].like);
      }      
    });
    
  }
  

 like (music){
   
    let contador = 0;
    const index = this.ranking.indexOf(music);
    contador = this.ranking[index].like ++;
    

    console.log (this.ranking[index].like) 
  }

  dislike(music){
    let contador = 0;  
    const index = this.ranking.indexOf(music)   ;
    contador = this.ranking[index].like --;  
    
  } 
  reset() {
    this.searchStr = null;
    this.searchResult = false;  
  } 

  

}
