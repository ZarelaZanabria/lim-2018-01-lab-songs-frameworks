import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicaComponent } from './components/musica/musica.component';
import { ArtistComponent } from './components/musica/artist/artist.component';
import { RankingComponent } from './components/musica/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    ArtistComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
