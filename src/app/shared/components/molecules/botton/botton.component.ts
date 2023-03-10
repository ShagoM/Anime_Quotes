import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.scss']
})
export class BottonComponent implements OnInit {

  @Output() enviarAction = new EventEmitter();
  @Input() nameButton: string;
  @Input() kindClass: string;
  @Input() type: string;
    
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  enviarEvento() {
    
    this.enviarAction.emit();
    
  }
}
