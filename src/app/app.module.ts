import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { HeaderComponent } from './shared/header/header.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ScrollTop } from './directives/scrollTop.directive';
import { ScrollInf } from './directives/scrollInf.directive';

import { DataService } from './services/data.service'
import { ProductService } from './services/product.service';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

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
    ScrollTop,
    ScrollInf,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
