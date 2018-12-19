import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  loading: boolean;
  artist: any = {};
  topTracks: any[] = [];
  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe(params => {console.log(params['id']);
    this.getArtist(params['id']);
    this.getTopTracks(params['id']);
    this.loading = true;
  });
  }

  ngOnInit() {
  }
  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
    .subscribe( data => {
      console.log(data);
      this.artist = data;
      this.loading = false;
    });
  }
  getTopTracks(id: string) {
    this.spotify.getTopSongs(id)
    .subscribe(data => {console.log(data);
      this.topTracks = data;
    });
  }
}
