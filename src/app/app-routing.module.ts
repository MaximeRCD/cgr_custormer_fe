import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustormerListComponent } from './custormer-list/custormer-list.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { CustomerResearchListComponent } from './customer-research-list/customer-research-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'customers', pathMatch: 'full' },
      { path: 'customers', component: CustormerListComponent },
      { path: 'needs/:id', component: CustomerResearchListComponent },
      { path: 'profile', component: ProfilComponent },
    ]
  },];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
