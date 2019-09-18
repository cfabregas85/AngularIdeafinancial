import { Component, OnInit } from '@angular/core';
import {NgForm  } from "@angular/forms";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  message:string="";

  constructor() { }

  ngOnInit() {
  }

  Send(form : NgForm){
    if (!form.valid) {
      return;
    }
    console.log(this.message);
  }
}
