import { Component, OnInit } from '@angular/core';
//Importamos la clase Artista 
import { Artist } from '../../../models/artist'; 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  artist: Artist = {
    name: '',
    image: '',
   
  }
}
