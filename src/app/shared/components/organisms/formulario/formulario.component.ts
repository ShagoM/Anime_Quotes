import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() enviarAction = new EventEmitter();
  @Input() placeholder:string;
  @Input() id: string;
  @Input() nameLabel:string;
  formulario: FormGroup;

  constructor() {

    this.initForm(); 
   }

  ngOnInit(): void {
    if (sessionStorage.getItem('title')) {
      this.formulario.controls['buscador'].setValue(sessionStorage.getItem('title'));
      
    }
  }

  eventoBuscar() {
    this.enviarAction.emit(this.formulario.controls['buscador'].value); 
  }

  initForm() {
    this.formulario = new FormGroup({
      buscador: new FormControl(''),
    });
  }

}
