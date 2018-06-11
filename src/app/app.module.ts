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

import { ScrollTop } from './shared/directives/scrollTop.directive';
import { ScrollInf } from './shared/directives/scrollInf.directive';

import { DataService } from './services/data.service';
import { ProductService } from './services/product.service';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ProductResolver} from './services/product-resolver';
import { AddAdvertComponent } from './add-advert/add-advert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './core/auth.service';
import {AuthInterceptor} from './core/auth.interceptor';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import {AdvertResolver} from "./services/advert.resolver";
import {CookieService} from 'ngx-cookie-service';

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
    NotFoundComponent,
    FooterComponent,
    AddAdvertComponent,
    ProductListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    ProductService,
    ProductResolver,
    AuthService,
    AdvertResolver,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
