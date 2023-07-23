import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageEnComponent } from './main-page-en/main-page-en.component';

const routes: Routes = [
  { path: '', component: MainPageEnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
