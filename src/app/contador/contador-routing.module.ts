import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioContadorComponent } from './inicio-contador/inicio-contador.component';

const routes: Routes = [
  {
    path: '', 
    component: InicioContadorComponent,
    children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
