import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotesShowComponent } from './quotes-show.component';

const routes: Routes = [{ path: '', component: QuotesShowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesShowRoutingModule { }
