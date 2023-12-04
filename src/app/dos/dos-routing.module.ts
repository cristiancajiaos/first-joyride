import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosComponent } from './dos.component';

const routes: Routes = [{ path: '', component: DosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DosRoutingModule { }
