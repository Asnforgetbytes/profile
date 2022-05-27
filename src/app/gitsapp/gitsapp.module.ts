import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitsappRoutingModule } from './gitsapp-routing.module';

import { GifsPageComponent } from "./gifs-page/gifs-page.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";
import { ResultadosComponent } from "./resultados/resultados.component";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    
    
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GitsappRoutingModule,
    
  ],
  exports:[
   
  ]
})
export class GitsappModule { }
