import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pages/pais/pais.component';

const routes: Routes = [
  {
    path: '', 
    component: PaisComponent,
    children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesappRoutingModule { }
