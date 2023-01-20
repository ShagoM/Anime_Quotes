import { Component } from '@angular/core';
import { Quote } from 'src/app/shared/models/quote.model';
import { InformationService } from 'src/app/shared/services/information.service';

@Component({
  selector: 'app-quotes-show',
  templateUrl: './quotes-show.component.html',
  styleUrls: ['./quotes-show.component.scss']
})
export class QuotesShowComponent {

  
  quotesArray: Quote[] = [];


  constructor(private informationService: InformationService) { 
    this.getQuote();
  }

  getQuote() {

    this.informationService.getAnimequotes().subscribe(data => {
      this.quotesArray.push(data);

    });
  }


     
  

 

}
