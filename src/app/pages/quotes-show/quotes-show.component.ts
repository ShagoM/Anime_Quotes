import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/shared/models/quote.model';
import { InformationService } from 'src/app/shared/services/information.service';

@Component({
  selector: 'app-quotes-show',
  templateUrl: './quotes-show.component.html',
  styleUrls: ['./quotes-show.component.scss']
})
export class QuotesShowComponent {

  quoteData: Quote

  constructor(private informationService: InformationService) { 

    this.informationService.getAnimequotes().subscribe(data => {
      this.quoteData = data;
    });


    
  }

  deleteQuotes(){

    console.log("nada");
    
      }
     
  

 

}
