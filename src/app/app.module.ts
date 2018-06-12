import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductListComponent } from './advert-list/advert-list.component';

import { ScrollTop } from './shared/directives/scrollTop.directive';
import { ScrollInf } from './shared/directives/scrollInf.directive';

import { DataService } from './services/data.service';
import { ProductService } from './services/product.service';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ProductResolver} from './services/product-resolver';
import { AddAdvertComponent } from './advert-list/add-advert/add-advert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './core/auth.service';
import {AuthInterceptor} from './core/auth.interceptor';
import { ProductListItemComponent } from './advert-list/advert-list-item/advert-list-item.component';
import {AdvertResolver} from './services/advert.resolver';
import {CookieService} from 'ngx-cookie-service';
import {SessionService} from './core/session.service';
import {ApiUsersService} from './core/api-users.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    ProductListComponent,
    ScrollTop,
    ScrollInf,
    NotFoundComponent,
    FooterComponent,
    AddAdvertComponent,
    ProductListItemComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
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
    SessionService,
    ApiUsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
