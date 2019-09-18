import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardtransationService } from '../../services/cardtransation.service';
import { TransactionModel } from '../models/transaction.model';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  transaction = new TransactionModel();

  constructor(public cardTransaction : CardtransationService ) { 

    this.cardTransaction.GetInfo().
             subscribe((resp:any)=>{
               this.transaction.id = resp.cardId;
               this.transaction.balance = resp.balance;
               this.transaction.amount = resp.amount;
               this.transaction.availablefunds = resp.availablefunds;
               this.transaction.creditlimit = resp.creditlimit;
             } );
             console.log(this.transaction);
  }  
  ngOnInit() {}
    

}
