import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TresComponent } from './tres.component';

const routes: Routes = [{ path: '', component: TresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresRoutingModule { }
