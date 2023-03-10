import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  @Input() id: string;
  @Input() nameLabel: string;
  @Input() inputName: string;
  @Input() type: string;
  @Input() textPlaceholder: string;
  @Input() kindClass: string;
  @Input() formName: string;
  @Input() form: FormGroup;


  

  constructor() { }

  ngOnInit(): void {
    
  }

}
