import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductListComponent } from './advert-list/advert-list.component';

import { ScrollTop } from './shared/directives/scrollTop.directive';
import { ScrollInf } from './shared/directives/scrollInf.directive';

import { ProductService } from './core/services/product.service';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ProductResolver} from './core/services/product-resolver';
import { AddAdvertComponent } from './advert-list/add-advert/add-advert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './core/auth.service';
import {AuthInterceptor} from './core/auth.interceptor';
import { AdvertListItemComponent } from './advert-list/advert-list-item/advert-list-item.component';
import {AdvertResolver} from './core/services/advert.resolver';
import {CookieService} from 'ngx-cookie-service';
import {SessionService} from './core/session.service';
import {ApiUsersService} from './core/api-users.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import {UserService} from './core/user.service';
import {AuthGuard} from './core/auth.guard';
import {LoginGuard} from './core/login.guard';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';
import { SigninComponent } from './signin/signin.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('837694048230-keo53o03s8od9ee39boib7o6prp18fs5')
      },
    ]
);
  return config;
}

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
    AdvertListItemComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    ProductService,
    ProductResolver,
    AuthService,
    AdvertResolver,
    CookieService,
    SessionService,
    ApiUsersService,
    UserService,
    AuthGuard,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
