import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private _http: Http) { }
 
  searchCustomer(custId:number):Observable<Customer>{
    return this._http.get("http://localhost:8080/EmployServiceExample/webapi/customer/"+custId).
    map((res:Response)=>res.json())
  }
  showCustomer() : Observable<Customer[]> {
   return this._http.get("http://localhost:8080/EmployServiceExample/webapi/customer").
   map((res:Response)=>res.json())
 }
}
