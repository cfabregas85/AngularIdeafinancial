import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './components/credit/credit.component';
import { DrawmoneyComponent } from './components/drawmoney/drawmoney.component';


const routes: Routes = [
  {path:'home', component:CreditComponent},
  {path:'drawmony', component:DrawmoneyComponent},
  {path:'**', pathMatch : 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
