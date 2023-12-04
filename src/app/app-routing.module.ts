import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'uno', loadChildren: () => import('./uno/uno.module').then(m => m.UnoModule) },
  { path: 'dos', loadChildren: () => import('./dos/dos.module').then(m => m.DosModule) },
  { path: 'tres', loadChildren: () => import('./tres/tres.module').then(m => m.TresModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
