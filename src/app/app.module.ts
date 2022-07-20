import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { AreaComponent } from './area/area.component';

import { PediComponent } from './area/pedi/pedi.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    AreaComponent,
    PediComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
