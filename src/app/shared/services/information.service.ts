
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote.model';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class InformationService {

  api_personajes = "https://animechan.vercel.app/api/random";

  constructor(private http: HttpClient) {}

  getAnimequotes(): Observable<Quote> {    
    return this.http.get<Quote>(this.api_personajes);
  }
 
}
