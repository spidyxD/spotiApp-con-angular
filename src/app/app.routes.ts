import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';


// unicamente contiene la deifinicion de rutas que usara la app
export const ROUTES: Routes  = [
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
// este formato de url obliga que para accesar a ese enlace
// se debe enviar el parametro id obligatoriamente
{path: 'artist/:id', component: ArtistaComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'},
];
