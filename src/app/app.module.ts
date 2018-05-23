import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { HeaderComponent } from './shared/header/header.component';
import { TestPageComponent } from './test_page/test-page.component';
import { ListPageComponent } from "./list_page/list-page.component";
import {ProductListComponent} from './product_list/product-list.component';
import {ProductItemComponent} from './product_list/product_item/product-item.component';

import { ScrollTop } from "./directives/scrollTop.directive";
import { ScrollInf } from "./directives/scrollInf.directive";

import { DataService } from "./services/data.service"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegesterComponent,
    HeaderComponent,
    TestPageComponent,
    ListPageComponent,
    ProductListComponent,
    ProductItemComponent,
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
