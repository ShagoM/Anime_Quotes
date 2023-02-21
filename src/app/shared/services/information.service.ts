
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote.model';


import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

//"https://animechan.vercel.app/api/random/anime?title="
//"https://animechan.vercel.app/api/random"


@Injectable({
  providedIn: 'root'
})
export class InformationService {

  api_personajes = "https://animechan.vercel.app/api/random";
  api_titulo = "https://animechan.vercel.app/api/random/anime";
 

  constructor(private http: HttpClient) {}

  getAnimequotes(): Observable<Quote> {    
    return this.http.get<Quote>(this.api_personajes);
  }

  getAnimefortitle(titulo): Observable<Quote> {    

    let params = new HttpParams().append('title',titulo);
    return this.http.get<Quote>(`${this.api_titulo}`, {params});
  }
 
}
