import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './pages/inicial/inicial.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';

const routes: Routes = [
  {
    path: '', 
    component: InicialComponent,
    children: [
      { path: 'porpais', component: PorPaisComponent },
      { path: 'porRegion', component: PorRegionComponent },
      { path: 'porCapital', component: PorCapitalComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
