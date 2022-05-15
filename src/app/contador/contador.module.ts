import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing.module';
import { InicioContadorComponent } from './inicio-contador/inicio-contador.component';


@NgModule({
  declarations: [
    InicioContadorComponent
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule
  ]
})
export class ContadorModule { }
