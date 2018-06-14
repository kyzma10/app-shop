import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './advert-list/advert-list.component';
import { AuthComponent } from './auth/auth.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {ProductResolver} from './services/product-resolver';
import {AddAdvertComponent} from './advert-list/add-advert/add-advert.component';
import {ProductListItemComponent} from './advert-list/advert-list-item/advert-list-item.component';
import {AdvertResolver} from "./services/advert.resolver";
import {ProfileComponent} from './auth/profile/profile.component';
import {AuthGuard} from './core/auth.guard';
import {LoginGuard} from './core/login.guard';
import {SigninComponent} from './signin/signin.component';

const routes: Routes = [
  {path: '', redirectTo: 'advert', pathMatch: 'full'},
  {path: 'advert', canActivate: [AuthGuard], component: ProductListComponent},
  {path: 'advert/:id', canActivate: [AuthGuard], component: ProductListItemComponent, resolve: {advert: AdvertResolver}},
  {path: 'auth', canActivate: [LoginGuard], component: AuthComponent},
  {path: 'add-advert', canActivate: [AuthGuard], component: AddAdvertComponent},
  {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
  {path: 'signin', component: SigninComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
