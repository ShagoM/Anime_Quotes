import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesShowRoutingModule } from './quotes-show-routing.module';
import { QuotesShowComponent } from './quotes-show.component';


@NgModule({
  declarations: [QuotesShowComponent],
  imports: [
    CommonModule,
    QuotesShowRoutingModule
  ]
})
export class QuotesShowModule { }
