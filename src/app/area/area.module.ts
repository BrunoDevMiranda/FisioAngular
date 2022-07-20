import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';

import { AppRoutingModule } from '../app-routing.module';
import { PediComponent } from './pedi/pedi.component';


@NgModule({
  declarations: [
    PediComponent

  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    AppRoutingModule
  ]
})
export class AreaModule { }
