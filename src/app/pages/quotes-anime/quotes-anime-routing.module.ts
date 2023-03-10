import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesAnimeComponent } from './quotes-anime.component';

const routes: Routes = [{ path: '', component: QuotesAnimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuotesAnimeRoutingModule { }
