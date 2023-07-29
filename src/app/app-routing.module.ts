import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageEnComponent } from './main-page-en/main-page-en.component';
import { AstrophotoComponent } from './astrophoto/astrophoto.component';

const routes: Routes = [
  { path: '', component: MainPageEnComponent },
  { path: 'astrophotography', component: AstrophotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
