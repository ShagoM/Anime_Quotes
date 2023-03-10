import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from 'src/app/shared/models/quote.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() enviarAction = new EventEmitter();
  @Input() quotesArray: Quote[];

  constructor() { }

  ngOnInit(): void {
  }

  eventoEliminar(index) {
    
    this.enviarAction.emit(index);
    
  }

}
