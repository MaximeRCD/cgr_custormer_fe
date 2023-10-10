import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustormerListComponent } from './custormer-list/custormer-list.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';
import { CustomerResearchListComponent } from './customer-research-list/customer-research-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustormerListComponent,
    HomeComponent,
    ProfilComponent,
    CustomerResearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
