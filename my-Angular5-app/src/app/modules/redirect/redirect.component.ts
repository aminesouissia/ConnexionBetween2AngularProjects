/*
 * @Author: amine.souissia
 * @Author.email: amine.swayssia@gmail.com
 * @Date: 2020-09-03 13:18:29
 * @Last Modified by: amine.souissia
 * @Last Modified time: 2020-09-03 13:19:00
 * Copyright (c) 2020 CodeLab360, Inc
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'http://localhost:1100';
  }

}
