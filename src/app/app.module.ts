
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*Solicitudes para Http */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MusicaComponent } from './components/musica/musica.component';
import { ArtistComponent } from './components/musica/artist/artist.component';
import { RankingComponent } from './components/musica/ranking/ranking.component';
import { SearchComponent } from "./components/musica/search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    ArtistComponent,
    SearchComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
