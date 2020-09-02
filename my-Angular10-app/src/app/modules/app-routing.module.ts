/*
 * @Author: amine.souissia
 * @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-02 15:34:31
 * @Last Modified by:   amine.souissia
 * @Last Modified time: 2020-09-02 15:34:31
 * Copyright (c) 2020 CodeLab360, Inc
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {path: '',  redirectTo: '/home', pathMatch: 'full' },
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
