import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  lookArtist(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    // el router se encarga de redireccionar la pagina 
    // la propiedad navigate recibe el url y los parametros necesarios establecidos en las rutas
    this.router.navigate(['artist' , artistId]);
  }
}
