/*
 * @Author: amine.souissia
 * @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-02 15:31:46
 * @Last Modified by: amine.souissia
 * @Last Modified time: 2020-09-03 13:19:18
 * Copyright (c) 2020 CodeLab360, Inc
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
