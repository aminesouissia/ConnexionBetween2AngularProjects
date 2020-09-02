/*
 * @Author: amine.souissia
 * @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-02 15:33:30
 * @Last Modified by: amine.souissia
 * @Last Modified time: 2020-09-02 15:33:50
 * Copyright (c) 2020 CodeLab360, Inc
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  title = 'Angular 10 Project';

  constructor() { }

  ngOnInit(): void {
  }

}
