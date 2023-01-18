import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'show-random', loadChildren: () => import('./pages/quotes-show/quotes-show.module').then(m => m.QuotesShowModule) },
  { path: '**', redirectTo:'show-random' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
