import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesShowRoutingModule } from './quotes-show-routing.module';
import { QuotesShowComponent } from './quotes-show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [QuotesShowComponent],
  imports: [
    CommonModule,
    QuotesShowRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
    
  
    
  ]
})
export class QuotesShowModule { }
