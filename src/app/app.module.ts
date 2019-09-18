import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { CreditComponent } from './components/credit/credit.component';
import { DrawmoneyComponent } from './components/drawmoney/drawmoney.component';
import { NavbarDrawComponent } from './components/share/navbar-draw/navbar-draw.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreditComponent,
    DrawmoneyComponent,
    NavbarDrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
