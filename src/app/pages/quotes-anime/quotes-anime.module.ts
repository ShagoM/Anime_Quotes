import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesAnimeRoutingModule } from './quotes-anime-routing.module';
import { QuotesAnimeComponent } from './quotes-anime.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [QuotesAnimeComponent],
  imports: [
    CommonModule,
    QuotesAnimeRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class QuotesAnimeModule { }
