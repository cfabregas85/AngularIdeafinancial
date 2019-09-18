import { Component, OnInit } from '@angular/core';
import {NgForm  } from "@angular/forms";
import { TransactionModel } from '../models/transaction.model';
import { CardtransationService } from '../../services/cardtransation.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from "sweetalert2";

@Component({
  selector: 'app-drawmoney',
  templateUrl: './drawmoney.component.html',
  styleUrls: ['./drawmoney.component.css']
})
export class DrawmoneyComponent implements OnInit {

  transaction :TransactionModel;


  constructor(private trasnService: CardtransationService, private route:Router) {}

  ngOnInit() {

    this.transaction = new TransactionModel();
    this.trasnService.GetInfo().
    subscribe((resp:any)=>{
      this.transaction.id = resp.cardId;
      this.transaction.balance = resp.balance;               
      this.transaction.availablefunds = resp.availablefunds;
      this.transaction.creditlimit = resp.creditlimit;
    } );
  }
  
     Save(form : NgForm){  
       
       if (!form.valid) {
        Swal.fire({
          title: 'Error',
          text:'Please, see the administrator', 
          type:'error'               
        });   
         return;
       }

      Swal.fire({
        title: 'Wait',
        text:'Processing ..', 
        type:'info',
        allowOutsideClick:false               
      });
      
      Swal.showLoading();                 
        this.trasnService.MakeTrasn(this.transaction).subscribe(res=>{
         if(res)
          {
            Swal.fire({
              title: 'Success',
              text:'Thank you!', 
              type:'success'               
            });           
               this.route.navigate(['/home'])
          }  
          else
          {                       
            Swal.fire({
              title: 'Warning',
              text:'The amount exceeds the available credit', 
              type:'error'               
            });         
          }
       });
      }           
  }  
 

