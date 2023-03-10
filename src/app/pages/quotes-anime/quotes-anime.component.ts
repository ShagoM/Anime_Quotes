import { Component, OnInit, OnDestroy} from '@angular/core';
import { Quote } from 'src/app/shared/models/quote.model';
import { InformationService } from 'src/app/shared/services/information.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quotes-anime',
  templateUrl: './quotes-anime.component.html',
  styleUrls: ['./quotes-anime.component.scss']
})
export class QuotesAnimeComponent implements OnInit, OnDestroy{

  quotesArray: Quote[] = [];
  suscripcion: Subscription[] = [];

  constructor(private informationService: InformationService) { 

  }

  ngOnInit(){
    this.getQuoteStorage();
  }

  ngOnDestroy(): void{
  
    this.suscripcion.forEach((sub) => sub.unsubscribe());
   
  }

  getQuote(event) {
    
    sessionStorage.setItem('title', event);
    
    let subscribeOne = this.informationService.getAnimefortitle(event).subscribe(data => {
      this.quotesArray.push(data);
    });

    this.suscripcion.push(subscribeOne)
  }

  getQuoteStorage() {
    let anime = sessionStorage.getItem('title');
    if(anime) {
      this.getQuote(anime);
    }
  }

  deleteAllQuotes() {
    this.quotesArray = [];
  };

  deleteQuote(index) {
    this.quotesArray.splice(index, 1);
  };

}