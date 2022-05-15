import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesappRoutingModule } from './paisesapp-routing.module';
import { PaisComponent } from './pages/pais/pais.component';


@NgModule({
  declarations: [
    PaisComponent
  ],
  imports: [
    CommonModule,
    PaisesappRoutingModule
  ]
})
export class PaisesappModule { }
