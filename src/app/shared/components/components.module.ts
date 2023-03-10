import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './molecules/control/control.component';
import { FormularioComponent } from './organisms/formulario/formulario.component';
import { BottonComponent } from './molecules/botton/botton.component';
import { CardComponent } from './organisms/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ControlComponent, FormularioComponent, BottonComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ControlComponent, FormularioComponent, BottonComponent, CardComponent]
})
export class ComponentsModule { }
