
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from  './home/home.component';
import {ConsultasComponent} from  './consultas/consultas.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
    { path: 'consulta', component: ConsultasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);
