import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './Home/home.component';
import { Login } from './Login/login.component';
import { Regester } from './Regester/regester.component';
import { Header } from './Shared/Header/header.component';
import { TestPage } from './test_page/test-page.component';
import { ListPage } from "./list_page/list-page.component";

import { ScrollTop } from "./directives/scrollTop.directive";
import { ScrollInf } from "./directives/scrollInf.directive";

import { DataService } from "./services/data.service"

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Login,
    Regester,
    Header,
    TestPage,
    ListPage,
    ScrollTop,
    ScrollInf
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
