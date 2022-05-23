import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NavegacionComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[
    NavegacionComponent,
    ToolbarComponent,
    
  ]
})
export class SharedModule { }
