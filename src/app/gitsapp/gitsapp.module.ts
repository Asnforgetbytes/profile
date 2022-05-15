import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitsappRoutingModule } from './gitsapp-routing.module';
import { HomegiftsComponent } from './homegifts/homegifts.component';


@NgModule({
  declarations: [
    
    HomegiftsComponent
  ],
  imports: [
    CommonModule,
    GitsappRoutingModule,

  ]
})
export class GitsappModule { }
