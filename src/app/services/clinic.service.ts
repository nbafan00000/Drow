import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
export interface Clinic {
  clinicName?: string,
  cliniciAddress?: string,
  cliniemail?: string,
  createdDatetime: string,
  fullName?: string,
  service?: string,
  uid?: string,
}
@Injectable({
  providedIn: 'root'
})
export class ClinicService {
    private apiURL = "https://drowzee-11e53.ew.r.appspot.com/api/clinic-enquiry"; //YOUR API URL
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    constructor(private httpClient: HttpClient) {}
   
    postClinic(clinic: Clinic): Observable < Clinic > {
        return this.httpClient.post < Clinic > (this.apiURL, JSON.stringify(clinic), this.httpOptions).pipe(catchError(this.errorHandler))
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
        return throwError(errorMessage);
    }
}