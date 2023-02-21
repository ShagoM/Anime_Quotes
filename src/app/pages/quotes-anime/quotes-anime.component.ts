import { Component, OnInit} from '@angular/core';
import { Quote } from 'src/app/shared/models/quote.model';
import { InformationService } from 'src/app/shared/services/information.service';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quotes-anime',
  templateUrl: './quotes-anime.component.html',
  styleUrls: ['./quotes-anime.component.scss']
})
export class QuotesAnimeComponent implements OnInit{

  quotesArray: Quote[] = [];
  formulario: FormGroup;

  constructor(private informationService: InformationService) { 
    this.initForm(); 
    
  }

  ngOnInit(){
    if (sessionStorage.getItem('title')) {
      this.formulario.controls['buscador'].setValue(sessionStorage.getItem('title'));
       this.getQuote();
    }
  }

  getQuote() {

    this.informationService.getAnimefortitle(this.formulario.controls['buscador'].value).subscribe(data => {
      this.quotesArray.push(data);
       sessionStorage.setItem('title',this.formulario.controls['buscador'].value);
        

    });
  }

  deleteAllQuotes() {
    this.quotesArray = [];
  };

  deleteQuote(index) {
    this.quotesArray.splice(index, 1);
  };

  initForm() {
    this.formulario = new FormGroup({
      buscador: new FormControl(''),

    });
  }
}