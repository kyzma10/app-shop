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

const routes: Routes = [
  {path: '', redirectTo: 'advert', pathMatch: 'full'},
  {path: 'advert', component: ProductListComponent},
  {path: 'advert/:id', component: ProductListItemComponent, resolve: {advert: AdvertResolver}},
  {path: 'login', component: AuthComponent},
  {path: 'add-advert', component: AddAdvertComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
