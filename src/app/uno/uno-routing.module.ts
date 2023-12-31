import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnoComponent } from './uno.component';

const routes: Routes = [{ path: '', component: UnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnoRoutingModule { }
