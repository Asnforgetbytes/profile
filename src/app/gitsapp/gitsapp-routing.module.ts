import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomegiftsComponent } from './homegifts/homegifts.component';
const routes: Routes = [
  {
    path: '', 
    component: HomegiftsComponent,
    children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitsappRoutingModule { }
