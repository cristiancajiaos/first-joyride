import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TresRoutingModule } from './tres-routing.module';
import { TresComponent } from './tres.component';


@NgModule({
  declarations: [TresComponent],
  imports: [
    CommonModule,
    TresRoutingModule
  ]
})
export class TresModule { }
