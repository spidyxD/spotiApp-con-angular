import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  // gracias al provide no es necesario hacer el import
  // en el app.module
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('test');
  }
  getQuery(query: string): any {
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC-5iRx7PAuUOWGkSDiFOP7HHuvCOA9p_0xEHRL9sJvHwj8DwR2r5f9PwhVdbIsFdjTr9fb-dAPZlmsUoM'
    });
    return this.http.get(URL, {headers});
  }
  getNewReleases() {
      // optimizar codigo con la funcion map que permite filtrar data para 
    // solo jalar la info que se necesita
   return this.getQuery('browse/new-releases?limit=20')
   .pipe(map(data => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=5`)
   .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
   // .pipe(map(data => data['artists'].items));
  }
  getTopSongs(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data => data['tracks']));
  }
}
