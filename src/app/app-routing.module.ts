import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductResolver} from './services/product-resolver';
import {AddAdvertComponent} from './add-advert/add-advert.component';

const routes: Routes = [
  {path: '', component: ProductListComponent, resolve: ProductResolver},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-advert', component: AddAdvertComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
