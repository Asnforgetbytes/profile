import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {
    path: 'inicio', 
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'contador', 
    loadChildren: () => import('./contador/contador.module').then(m => m.ContadorModule)
  },
  {
    path: 'giftsapp', 
    loadChildren: () => import('./gitsapp/gitsapp.module').then(m => m.GitsappModule)
  },
  {
    path: 'paisesapp', 
    loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
