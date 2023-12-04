import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DosRoutingModule } from './dos-routing.module';
import { DosComponent } from './dos.component';


@NgModule({
  declarations: [DosComponent],
  imports: [
    CommonModule,
    DosRoutingModule
  ]
})
export class DosModule { }
