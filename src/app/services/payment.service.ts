import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export interface OrderData {
  orderData: {
    firstName: string,
    lastName: string,
    email: string,
    contactPhone: string,
    shipping_address: string,
    pincode: string,
    city: string,
    state: string,
    country: string,
    product: "PENDULUM",
    price: string
  }
}

export interface OrderUpdate {
  orderupdate: { 
    uid: string,
    orderNo: string,
    paymentReference: string,
    payment_status: string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiURL = "https://drowzee-11e53.ew.r.appspot.com/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {}
  
  postOrder(order: OrderData): Observable <OrderData> {
    return this.httpClient.post <OrderData> (this.apiURL + '/create-order', JSON.stringify(order), this.httpOptions).pipe(catchError(this.errorHandler))
  }

  updateOrder(order: OrderUpdate): Observable <OrderUpdate> {
    return this.httpClient.post <OrderUpdate> (this.apiURL + '/update-order', JSON.stringify(order), this.httpOptions).pipe(catchError(this.errorHandler))
  }
  
  errorHandler(error: {
    error: {
      message: string;
    };status: any;message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert('An error has occured. Please try again.\n' + errorMessage);
    return throwError(errorMessage);
  }
}