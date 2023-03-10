import { Component, OnDestroy } from '@angular/core';
import { Quote } from 'src/app/shared/models/quote.model';
import { InformationService } from 'src/app/shared/services/information.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quotes-show',
  templateUrl: './quotes-show.component.html',
  styleUrls: ['./quotes-show.component.scss']
})
export class QuotesShowComponent implements OnDestroy {

  quotesArray: Quote[] = [];
  suscripcion: Subscription[] = [];

  constructor(private informationService: InformationService) { 
    this.getQuote();
  }

  ngOnDestroy(): void {
   
    this.suscripcion.forEach((sub) => sub.unsubscribe());

  }

  getQuote() {

    let subscribeOne = this.informationService.getAnimequotes().subscribe(data => {
      this.quotesArray.push(data);
    });

    this.suscripcion.push(subscribeOne)


  }

  deleteAllQuotes() {
    this.quotesArray = [];
  };

  deleteQuote(index) {
    this.quotesArray.splice(index, 1);
    
    
  };



}

     
  

 


