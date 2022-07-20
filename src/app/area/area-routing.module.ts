import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PediComponent } from './pedi/pedi.component';


export const routes: Routes = [

  {path: 'pedi', component: PediComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
