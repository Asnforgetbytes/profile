import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsPageComponent } from "./gifs-page/gifs-page.component";

const routes: Routes = [
  {
    path: '', 
    component: GifsPageComponent,
    children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitsappRoutingModule { }
