import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contactoRouting';



@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContactoRoutingModule,
    FormsModule
  ]
})
export class ContactoModule { }
