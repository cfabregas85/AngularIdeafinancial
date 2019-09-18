import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionModel } from '../components/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class CardtransationService {

  private urlApi = 'https://localhost:44327/api/transaction';

  constructor(private http:HttpClient) { }

  GetInfo()
  {
   return this.http.get(this.urlApi);
  }



  MakeTrasn(trasn:TransactionModel){    
    
    console.log(trasn.amount);

    return this.http.get(`${this.urlApi}/${trasn.id}/${trasn.amount}`);    
  }


}
