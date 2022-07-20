import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';

import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { PediComponent } from './area/pedi/pedi.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:"home", component: HomeComponent},
  {path:"area", component: AreaComponent},
  {path:"contato", component: ContatoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
