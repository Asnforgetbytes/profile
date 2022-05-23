import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { inicioRoutingModule } from './iniciorouting';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    inicioRoutingModule,
    FlexLayoutModule
  ]
})
export class InicioModule { }
