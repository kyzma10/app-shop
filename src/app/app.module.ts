import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './Home/home.component';
import { Login } from './Login/login.component';
import { Regester } from './Regester/regester.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Login,
    Regester
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
