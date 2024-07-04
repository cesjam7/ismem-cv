import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';

export const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'sobre-mi', component: SobremiComponent},
];